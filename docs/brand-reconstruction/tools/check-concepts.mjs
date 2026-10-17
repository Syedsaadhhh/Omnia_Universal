import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const out=new URL('../evidence/concepts/',import.meta.url);await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
const rows=[];const files=['a-open-register','b-working-assembly','c-common-ground','identity','wireframes','index'];
for(const width of [1440,768,390,320]){
 const context=await browser.newContext({viewport:{width,height:width>1000?1000:900},reducedMotion:'reduce'});const page=await context.newPage();
 for(const file of files){
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const response=await page.goto('http://127.0.0.1:4173/'+file+'.html',{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
  const data=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,fontsLoaded:document.fonts.status,brokenImages:[...document.images].filter(x=>!x.complete||!x.naturalWidth).map(x=>x.src),missingFragments:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href').slice(1)).filter(x=>x&&!document.getElementById(x)),h1:document.querySelectorAll('h1').length,animations:document.getAnimations().filter(x=>x.playState==='running').length}));
  const axe=(await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations.map(x=>({id:x.id,impact:x.impact,nodes:x.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));
  await page.screenshot({path:new URL(`${width}-${file}.png`,out).pathname,fullPage:true});
  if(file.startsWith('a-')||file.startsWith('b-')||file.startsWith('c-'))await page.screenshot({path:new URL(`${width}-${file}-viewport.png`,out).pathname});
  rows.push({file,width,status:response.status(),...data,axe,errors});
 }
 if(width===390){for(const file of files.slice(0,3)){await page.goto('http://127.0.0.1:4173/'+file+'.html');const toggle=page.locator('.mobilenav summary');await toggle.focus();await page.keyboard.press('Enter');await page.keyboard.press('Tab');await page.screenshot({path:new URL(`390-${file}-menu.png`,out).pathname});await page.keyboard.press('Escape');rows.push({file,interaction:'Escape closes menu and restores focus',closed:await page.locator('.mobilenav').evaluate(x=>!x.open),focused:await toggle.evaluate(x=>document.activeElement===x)});}}
 await context.close();
}
await browser.close();await fs.writeFile(new URL('checks.json',out),JSON.stringify({date:new Date().toISOString(),method:'Chromium, local static studies; all six documents at 1440/768/390/320, axe each viewport, reduced motion; not full WCAG conformance.',rows},null,2)+'\n');console.log(JSON.stringify({samples:rows.length,issues:rows.filter(x=>x.status&&((x.scrollWidth>x.width)||x.brokenImages.length||x.missingFragments.length||x.axe.length||x.errors.length)),interactions:rows.filter(x=>x.interaction)}));
