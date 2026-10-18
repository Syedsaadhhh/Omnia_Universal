import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';

const out = new URL('../evidence/', import.meta.url);
await fs.mkdir(new URL('baseline/', out), { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
const routes = ['/', '/projects', '/research', '/about', '/build-log', '/contact', '/security', '/privacy', '/terms', '/gns3-agent'];
const results = [];
for (const width of [1440, 768, 390, 320]) {
  const context = await browser.newContext({ viewport: { width, height: width > 1000 ? 1000 : 900 }, reducedMotion: 'reduce', ignoreHTTPSErrors: true });
  const page = await context.newPage();
  for (const route of routes) {
    const response = await page.goto('http://127.0.0.1:3101' + route, { waitUntil: 'networkidle' });
    const row = await page.evaluate(() => ({ title: document.title, h1: document.querySelector('h1')?.textContent, h2: [...document.querySelectorAll('h2')].map(x => x.textContent), width: innerWidth, scrollWidth: document.documentElement.scrollWidth, bodyFont: getComputedStyle(document.body).fontFamily, h1Style: document.querySelector('h1') ? { fontSize: getComputedStyle(document.querySelector('h1')).fontSize, lineHeight: getComputedStyle(document.querySelector('h1')).lineHeight } : null, canonical: document.querySelector('link[rel=canonical]')?.href, text: document.body.innerText, images: [...document.images].map(x => ({src: x.getAttribute('src'),loaded: x.complete && x.naturalWidth > 0})), animations: document.getAnimations().filter(a => a.playState === 'running').length, smallControls: [...document.querySelectorAll('a,button')].filter(x => x.getClientRects().length).map(x => ({text: (x.textContent || x.getAttribute('aria-label') || '').trim(), w: x.getBoundingClientRect().width, h: x.getBoundingClientRect().height})).filter(x => x.w < 24 || x.h < 24), resources: performance.getEntriesByType('resource').map(r => ({name: r.name.split('/').pop(),size:r.encodedBodySize,type:r.initiatorType})) }));
    if (width === 320 || width === 1440) row.axe = (await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations.map(x => ({id:x.id,impact:x.impact,nodes:x.nodes.map(n=>n.target)}));
    const slug = route === '/' ? 'home' : route.slice(1);
    await page.screenshot({ path: new URL(`baseline/${width}-${slug}.png`, out).pathname, fullPage: true });
    results.push({ route, status: response.status(), ...row });
  }
  if (width === 390) {
    await page.goto('http://127.0.0.1:3101/');
    const toggle=page.locator('button[aria-controls=mobile-navigation]');
    await toggle.click(); await page.screenshot({path:new URL('baseline/390-menu-open.png',out).pathname});
    await page.keyboard.press('Escape');
    results.push({interaction:'Escape closes and restores focus',closed:await toggle.getAttribute('aria-expanded')==='false',focus:await toggle.evaluate(x=>x===document.activeElement)});
  }
  await context.close();
}
// Ordinary page reads only: no submissions, probes or security attacks on production.
const live = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', ignoreHTTPSErrors: true });
const page = await live.newPage();
for (const route of routes) {
  try {
    const response=await page.goto('https://omniaseclabs.com'+route,{waitUntil:'domcontentloaded',timeout:25000});
    await page.waitForTimeout(350);
    const slug=route==='/'?'home':route.slice(1);
    await page.screenshot({path:new URL(`baseline/live-${slug}.png`,out).pathname,fullPage:true});
    results.push({live:route,status:response.status(),title:await page.title(),h1:await page.locator('h1').allTextContents()});
  } catch(e){ results.push({live:route,error:String(e).slice(0,200)}); }
}
await live.close();
await browser.close();
await fs.writeFile(new URL('baseline-browser.json',out),JSON.stringify({date:new Date().toISOString(),source:'c5d2500',method:'Chromium, unthrottled, reduced motion; axe on desktop and 320px; screenshots all ten routes at four local widths, ordinary live reads.',results},null,2)+'\n');
console.log(JSON.stringify({captures:results.length,overflow:results.filter(x=>x.scrollWidth>x.width).map(x=>({route:x.route,width:x.width,scrollWidth:x.scrollWidth})),axeViolations:results.filter(x=>x.axe?.length).map(x=>({route:x.route,width:x.width,violations:x.axe})),liveFailures:results.filter(x=>x.live&&x.status!==200)}));
