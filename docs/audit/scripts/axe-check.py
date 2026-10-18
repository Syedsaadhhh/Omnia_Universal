import asyncio,json
from pathlib import Path
from playwright.async_api import async_playwright
async def main():
 rows=[]
 async with async_playwright() as p:
  browser=await p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
  for width in [1440,390]:
   page=await browser.new_page(viewport={'width':width,'height':1000},reduced_motion='reduce')
   for path in ['/','/projects','/about','/contact']:
    await page.goto('http://127.0.0.1:3100'+path,wait_until='networkidle')
    await page.add_script_tag(path='/tmp/omnia-audit-tools/node_modules/axe-core/axe.min.js')
    data=await page.evaluate('''async () => {const r=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa']}});return {violations:r.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,help:v.help,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),incomplete:r.incomplete.map(x=>({id:x.id,count:x.nodes.length})),passes:r.passes.length}}''')
    rows.append({'width':width,'route':path,**data});print(width,path,[(v['id'],len(v['nodes'])) for v in data['violations']],flush=True)
   await page.close()
  await browser.close()
 Path('/tmp/omnia-audit-evidence/axe-results.json').write_text(json.dumps(rows,indent=2))
asyncio.run(main())
