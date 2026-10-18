import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const out='.impeccable/review';await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||'/usr/bin/chromium',args:['--no-sandbox']});
const rows=[];
for(const width of [1440,768,390,320]){
 const context=await browser.newContext({viewport:{width,height:width===1440?956:900},reducedMotion:'reduce'});const page=await context.newPage();
 for(const [slug,path] of [['home','/'],['work','/projects'],['research','/research'],['organizations','/for-organizations'],['collaborate','/collaborate'],['method','/research/method'],['about','/about'],['contact','/contact'],['privacy','/privacy'],['gns3','/gns3-agent']]){
  const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:3101'+path,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
  await page.screenshot({path:`${out}/${width}-${slug}.png`,fullPage:true});
  if(slug==='home')await page.screenshot({path:`${out}/${width}-home-viewport.png`});
  rows.push({width,path,errors,...await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,bodyFont:getComputedStyle(document.body).fontFamily,headingFont:getComputedStyle(document.querySelector('h1')).fontFamily,bodySize:getComputedStyle(document.body).fontSize,images:[...document.images].every(x=>x.complete&&x.naturalWidth>0)}))});
 }
 if(width===390){await page.goto('http://127.0.0.1:3101/');await page.getByRole('button',{name:'Open navigation menu',exact:true}).click();await page.keyboard.press('Tab');await page.screenshot({path:`${out}/390-menu-keyboard-focus.png`});await page.keyboard.press('Escape');await page.screenshot({path:`${out}/390-menu-escape.png`});}
 await context.close();
}
await browser.close();await fs.writeFile(`${out}/browser-summary.json`,JSON.stringify(rows,null,2)+'\n');console.log({samples:rows.length,issues:rows.filter(x=>x.scrollWidth>x.width||x.errors.length||!x.images)});
