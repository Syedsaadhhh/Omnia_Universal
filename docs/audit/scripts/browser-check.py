import asyncio,json,os,re,time
from pathlib import Path
from urllib.parse import urlparse,unquote
from playwright.async_api import async_playwright
OUT=Path('/tmp/omnia-audit-evidence');(OUT/'screenshots').mkdir(exist_ok=True)
ROUTES=['/','/projects','/research','/about','/build-log','/contact','/security','/privacy','/terms','/gns3-agent']
async def main():
 rows=[];checks=[]
 async with async_playwright() as p:
  browser=await p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
  for name,width,height in [('desktop',1440,1000),('tablet',768,1024),('mobile',390,844)]:
   context=await browser.new_context(viewport={'width':width,'height':height},reduced_motion='reduce')
   page=await context.new_page(); errors=[]; page.on('pageerror',lambda e:errors.append(str(e)))
   for route in ROUTES:
    errors.clear()
    try:
     response=await page.goto('https://omniaseclabs.com'+route,wait_until='networkidle',timeout=25000)
     await page.screenshot(path=str(OUT/'screenshots'/(f'live-{name}-'+('home' if route=='/' else route.strip('/'))+'.png')),full_page=True,animations='disabled')
     data=await page.evaluate('''() => ({title:document.title,h1:document.querySelector('h1')?.innerText,canonical:document.querySelector('link[rel=canonical]')?.href,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,formCount:document.forms.length,brokenImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),links:[...document.querySelectorAll('a[href]')].map(a=>({href:a.getAttribute('href'),text:a.innerText})),ids:[...document.querySelectorAll('[id]')].map(x=>x.id),requests:performance.getEntriesByType('resource').map(x=>x.name),lcpApproxMs:performance.getEntriesByType('paint').map(x=>({name:x.name,startTime:x.startTime}))})''')
     row={'viewport':name,'route':route,'status':response.status,'errors':errors[:],'security':await response.security_details(),**data};rows.append(row)
     print(name,route,response.status,'overflow',data['scrollWidth']>width,'errors',len(errors),flush=True)
    except Exception as e: rows.append({'viewport':name,'route':route,'error':str(e)});print(name,route,type(e).__name__,str(e)[:100],flush=True)
   await context.close()
  context=await browser.new_context(viewport={'width':390,'height':844},reduced_motion='reduce');page=await context.new_page()
  await page.goto('http://127.0.0.1:3100/',wait_until='networkidle')
  for i in range(6):await page.keyboard.press('Tab')
  checks.append({'name':'focus after six Tabs with mobile menu closed','result':await page.evaluate('''() => ({tag:document.activeElement.tagName,text:document.activeElement.innerText,rect:document.activeElement.getBoundingClientRect().toJSON(),menuOpen:document.querySelector('.menu-button').getAttribute('aria-expanded')})''')})
  await page.get_by_role('button',name='Open navigation').click();checks.append({'name':'mobile menu opens','pass':await page.get_by_role('button',name='Close navigation').get_attribute('aria-expanded')=='true'})
  await page.keyboard.press('Escape');checks.append({'name':'Escape closes mobile menu','pass':await page.get_by_role('button',name='Close navigation').count()==0})
  await page.locator('.mobile-menu').get_by_role('link',name='Projects',exact=False).first.click();await page.wait_for_url('**/projects')
  checks.append({'name':'mobile navigation reaches projects and closes','pass':await page.get_by_role('button',name='Open navigation').count()==1})
  filters=page.locator('.project-filters button'); counts={}
  for label in ['All','Flagship','Hackathons','Security Tools']:
   await filters.filter(has_text=re.compile('^'+label+'$')).click();counts[label]=await page.locator('.showcase-card').count()
  checks.append({'name':'project filters','counts':counts,'pass':counts=={'All':11,'Flagship':4,'Hackathons':6,'Security Tools':7}})
  await page.goto('http://127.0.0.1:3100/contact?interest=Research%20collaboration',wait_until='networkidle');checks.append({'name':'contact flow','formCount':await page.locator('form').count(),'mailto':await page.locator('a[href^="mailto:"]').first.get_attribute('href')})
  try:
   r=await page.goto('https://www.omniaseclabs.com',timeout=20000);checks.append({'name':'www independent browser','status':r.status,'url':page.url,'body':(await page.locator('body').inner_text())[:150]})
  except Exception as e:checks.append({'name':'www independent browser','error':str(e)[:300]})
  await browser.close()
 (OUT/'browser-results.json').write_text(json.dumps({'scope':'live GET screenshots; local-only interaction checks','routes':rows,'checks':checks},indent=2))
 print(json.dumps(checks,indent=2))
asyncio.run(main())
