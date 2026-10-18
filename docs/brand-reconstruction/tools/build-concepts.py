"""Generate isolated, editable design studies. Never writes application/public files."""
from pathlib import Path
from html import escape
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen

root = Path(__file__).resolve().parents[1] / 'concepts'
marks = {
 'a': '<path d="M7 7h25v9H16v25H7Z M25 25h25v25H25v-9h16v-7H25Z" fill="currentColor"/>',
 'b': '<path d="M5 12h27l-8 13H14L5 40Z M51 44H24l8-13h10l9-15Z" fill="currentColor"/>',
 'c': '<g fill="none" stroke="currentColor" stroke-width="6"><path d="M7 7v8c0 19 10 30 42 30"/><path d="M22 7v8c0 14 7 20 27 20"/><path d="M37 7v8c0 6 3 10 12 10"/></g>',
}
names = {'a': 'Open Register', 'b': 'Working Assembly', 'c': 'Common Ground'}
arrow = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>'
def mark(k, css='mark'):
 return f'<svg class="{css}" viewBox="0 0 56 56" aria-hidden="true">{marks[k]}</svg>'
for k,body in marks.items():
 (root/f'{k}-symbol.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" role="img" aria-label="{names[k]} exploratory symbol">{body}</svg>\n')

# Wordmark exploration in editable SVG outlines, not a final custom typeface.
fonts = {'a': ('schibstedgrotesk-SchibstedGrotesk-wght.ttf', {'wght':600}), 'b':('barlowcondensed-BarlowCondensed-SemiBold.ttf',{}), 'c':('commissioner-Commissioner-FLAR-VOLM-slnt-wght.ttf',{'wght':550,'FLAR':0,'VOLM':0,'slnt':0})}
for k,(file,axes) in fonts.items():
 font=TTFont(root/'fonts'/file)
 if axes: font=instantiateVariableFont(font,axes,inplace=False)
 glyphs=font.getGlyphSet(); cmap=font.getBestCmap(); parts=[]; x=0
 for ch in ('OMNIASEC LABS' if k=='b' else 'Omniasec Labs'):
  glyph=cmap[ord(ch)]; pen=SVGPathPen(glyphs);glyphs[glyph].draw(pen)
  parts.append(f'<path d="{pen.getCommands()}" transform="translate({x} 0)"/>');x+=font['hmtx'][glyph][0]
 units=font['head'].unitsPerEm; ascent=font['hhea'].ascent; descent=font['hhea'].descent
 symbol=f'<g transform="translate(0 {ascent*.15}) scale({units*.85/56})">{marks[k]}</g>'
 text=f'<g transform="translate({units*1.13} {ascent*.83}) scale(1 -1)" fill="currentColor">'+''.join(parts)+'</g>'
 width=x+units*1.2; height=ascent-descent
 svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" role="img" aria-label="Omniasec Labs exploratory wordmark">{symbol}{text}</svg>'
 (root/f'{k}-wordmark.svg').write_text(svg+'\n')

def reviewbar(label):
 return f'<div class="reviewbar"><div class="shell"><strong>{label} · Unapproved design study</strong><nav aria-label="Design alternatives"><a href="a-open-register.html">A · Open Register</a><a href="b-working-assembly.html">B · Working Assembly</a><a href="c-common-ground.html">C · Common Ground</a><a href="identity.html">Identity sheets</a><a href="wireframes.html">Wireframes</a></nav></div></div>'
nav='<a href="#research">Research</a><a href="#work">Work</a><a href="#organizations">For organizations</a><a href="#about">About</a><a href="#collaborate">Collaborate</a><a href="#updates">Updates</a>'
def brand(k): return f'<a class="brand" href="#top" aria-label="Omniasec Labs home">{mark(k)}<span>Omniasec Labs</span></a>'
def head(k):
 return reviewbar(f'{k.upper()} / {names[k]}')+f'<header class="sitehead" id="top"><div class="shell headrow">{brand(k)}<nav class="desktop" aria-label="Primary">{nav}</nav><details class="mobilenav"><summary>Menu</summary><nav aria-label="Mobile">{nav}<a href="mailto:contact@omniaseclabs.com">Contact</a></nav></details></div></header><div class="shell descriptor">Technology research &amp; product development</div>'
def action(text,target,primary=False): return f'<a class="action {"primary" if primary else ""}" href="{target}">{text}{arrow}</a>'
stage='<p class="stage">Founded by Syed Saad. Building the lab, its methods and its next collaborations.</p>'
intro='<p class="intro">A founder-led initiative to investigate real problems, form capable teams and develop useful technology.</p>'
actions='<div class="actions">'+action('Explore collaboration','#collaborate',True)+action('Bring a problem','#organizations')+'</div>'
steps=['Research','Problem discovery','Validation','Team formation','Prototype engineering','User testing','Product development','Potential venture']
method='<aside class="method"><h2>From a question to something worth building.</h2><ol>'+''.join(f'<li>{s}</li>' for s in steps)+'</ol><p>Our intended method. Progress depends on evidence; not every question should become a product.</p></aside>'
hero_a=f'<section class="hero shell"><div class="hero-grid"><div><h1>Research real problems.<br><span>Build what proves useful.</span></h1>{intro}{stage}{actions}</div>{method}</div></section>'
hero_b=f'<section class="hero shell"><div class="hero-grid"><h1>Good questions.<br><span>Working answers.</span></h1><div>{intro}{stage}{actions}</div></div></section><div class="shell"><section class="assembly" aria-labelledby="method"><h2 id="method">A method for making progress.</h2><ol>'+''.join(f'<li>{s}</li>' for s in steps)+'</ol><p>Our intended path, with evidence gates and room to stop. A prototype is not a proven product; a product does not have to become a venture.</p></section></div>'
hero_c=f'<section class="hero"><div class="shell"><h1>Different disciplines.<br><span>Shared problems.</span></h1>{intro}{stage}{actions}<div class="confluence"><p><span>Bring a perspective.</span>Research, engineering, design and domain knowledge.</p>{mark("c")}<p><span>Find a useful next question.</span>Discover, validate, form a team, prototype and test before scaling.</p></div></div></section>'
work='''<section class="section shell" id="work"><div class="section-top"><h2>Work you can examine.</h2><p>Selected material from the existing archive. These artifacts show areas of exploration, not an established product portfolio or customer outcomes.</p></div><div class="work-list">'''
for title,kind,copy,url,label in [
 ('DwellGuard','Historical logistics prototype','An exploration of human-reviewed coordination around delayed trucks and dock plans.','https://github.com/Syedsaadhhh/DwellGuard-AI','Inspect source'),
 ('ReproForge','Historical FrontierOps / AMD ACT II work','An exploration of reproducible claims and evidence. Preserve the original team and event attribution.','https://github.com/Syedsaadhhh/reproforge-sentinel','Inspect source'),
 ('GNS3 Agent','Existing network-lab project','A diagnostic and automation project. Architecture and limitations remain available in the original archive.','https://omniaseclabs.com/gns3-agent','Read existing detail')]:
 work+=f'<article class="work-item"><h3>{title}</h3><span class="maturity">{kind}</span><p>{copy}</p><a href="{url}">{label}{arrow}</a></article>'
work+='</div><p class="fine" style="margin-top:26px">Current project maintenance and maturity will be revalidated before the reconstructed Work index is published.</p></section>'
research='''<section class="section light-section" id="research"><div class="shell split"><h2>The problem comes before the technology.</h2><div class="research-copy"><p>We want to investigate where a real workflow breaks, what existing approaches miss, and what evidence would justify building something new.</p><p>AI, software, security, automation and infrastructure are tools—not the limits of the lab.</p><small>Future research records will distinguish questions, experiments, findings and limitations. No publication record is implied.</small><a href="#organizations">Share a problem worth investigating'''+arrow+'''</a></div></div></section>'''
paths='''<section class="section shell"><div class="section-top"><h2>Useful work starts with a conversation.</h2><p>We are forming the lab around real questions and capable people. Explore fit before making commitments.</p></div><div class="split"><article class="path" id="collaborate"><h2>Build with the lab.</h2><p>For researchers, engineers, designers and people with domain expertise. Share what you can contribute, what you want to investigate and your availability.</p><p class="fine">An invitation to discuss collaboration, not an advertised job, equity offer or funding commitment.</p>'''+action('Discuss collaboration','mailto:contact@omniaseclabs.com?subject=Collaboration%20with%20Omniasec%20Labs',True)+'''</article><article class="path" id="organizations"><h2>Bring a real problem.</h2><p>Tell us where the workflow fails, who experiences it and what a useful outcome would look like. A conversation can lead to discovery and feasibility assessment before scope is agreed.</p><p class="fine">Technical delivery depends on fit, feasibility, available capacity and a separate agreement.</p>'''+action('Start a problem conversation','mailto:contact@omniaseclabs.com?subject=Problem%20discovery%20with%20Omniasec%20Labs')+'''</article></div></section>'''
about='''<section class="section light-section" id="about"><div class="shell split"><h2>Ambition, with an honest starting point.</h2><div><p class="research-copy">Omniasec Labs is a founder-led initiative by Syed Saad. The organization is being formed—not presented as an established institute, funded venture studio or large delivery team.</p><p>Our aim is to assemble the right people around worthwhile problems, develop evidence through prototypes and user testing, and pursue products or independent ventures when justified.</p></div></div></section>'''
updates='''<section class="section shell" id="updates"><div class="section-top"><h2>Progress, with a record.</h2><p>Updates should show what changed, what was tested and what remains uncertain.</p></div><article class="update"><time datetime="2026-10-16">16 October 2026</time><div><h3>The engineering foundation checkpoint</h3><p>Security and reproducibility work is documented in draft PR #6. It remains under review; source improvements are not deployed improvements.</p></div><a href="https://github.com/Syedsaadhhh/Omnia_Universal/pull/6">Read the evidence</a></article></section>'''
def footer(k):return f'<footer class="foot"><div class="shell"><div>{brand(k)}<p>Technology research &amp; product development.<br>Founder-led. In formation.</p></div><nav aria-label="Footer"><a href="mailto:contact@omniaseclabs.com">Contact</a><a href="https://github.com/Syedsaadhhh">GitHub</a><a href="https://omniaseclabs.com/security">Security</a><a href="https://omniaseclabs.com/privacy">Privacy</a><a href="https://omniaseclabs.com/terms">Terms</a></nav></div></footer>'
def document(title,body,css):return f'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>{escape(title)} — Omniasec Labs design review</title><link rel="stylesheet" href="concepts.css"><script src="interactions.js" defer></script></head><body class="{css}"><a class="skip" href="#main">Skip to content</a>{body}</body></html>\n'
for k,hero in [('a',hero_a),('b',hero_b),('c',hero_c)]:
 content=({'a':work+research+paths+about+updates,'b':research+work+paths+about+updates,'c':paths+research+work+about+updates})[k]
 body=head(k)+'<main id="main">'+hero+content+'</main>'+footer(k)
 (root/({'a':'a-open-register.html','b':'b-working-assembly.html','c':'c-common-ground.html'}[k])).write_text(document(names[k],body,k))

descriptions={'a':('Open questions, inspectable evidence.','Paired open frames leave a deliberate gap: research remains open until evidence supports the next step. This is a conceptual interpretation, not a scientific symbol.','Literata + Schibsted Grotesk','Research notes and editorial reading; pine, mineral and sage.'), 'b':('Different parts, a working joint.','Two offset planes make a joint without closing into a badge. The assembly expresses complementary skills becoming a useful artifact.','Barlow Condensed + Barlow','Light-first engineering studio; chalk, warm charcoal and fired oxide.'), 'c':('Different disciplines, common ground.','Three open paths turn toward a shared baseline. Their convergence represents a shared test—not automatic consensus, an AI network or a wireless signal.','Commissioner','Collaboration-led, open humanist type; cobalt, limestone and yellow.')}
palettes={'a':[('#101F1D','#EAF1EB'),('#EAF1EB','#18362C'),('#B3D4A0','#152B22'),('#315A42','#F1F6EF')], 'b':[('#F4F1E8','#292820'),('#292820','#F4F1E8'),('#A64022','#FFF9F0'),('#ECA27D','#292820')], 'c':[('#101D4C','#F2F3E3'),('#F2F3E3','#101D4C'),('#1735A6','#F2F3E3'),('#EAD269','#101D4C')]}
identity=reviewbar('Identity / comparison')+'<main class="shell" id="main"><header class="dochead"><h1>Three identities. One lab.</h1><p>Exploratory symbols and wordmarks for selection, not final commercial assets. All applications use the approved name. Naming clearance, optical refinement and production exports follow approval.</p></header>'
for k in 'abc':
 thesis,rationale,typeface,style=descriptions[k]
 identity+=f'<section class="reviewsection {k}"><h2>{k.upper()} · {names[k]}</h2><p>{thesis} {rationale}</p><div class="identity-grid" style="margin-top:28px"><div class="identity-tile dark">{mark(k)}<small>Primary symbol · dark application</small></div><div class="identity-tile light">{mark(k)}<small>One-color light application</small></div><div class="identity-tile wide light"><img class="wordmark" src="{k}-wordmark.svg" alt="Omniasec Labs {names[k]} horizontal wordmark"/><small>Horizontal lockup · type set as SVG outlines</small></div><div class="identity-tile dark">{mark(k)}<span style="font:600 30px/1.15 var(--body);text-align:center">Omniasec<br>Labs</span><small>Vertical lockup · prototype typesetting</small></div><div class="identity-tile light"><div class="favicon-row">'
 for size in [16,24,32]:identity+=f'<figure><img src="{k}-symbol.svg" width="{size}" height="{size}" alt="{size} pixel exploratory symbol"><figcaption>{size}px</figcaption></figure>'
 identity+='</div><small>Compact / favicon · shown at actual CSS size</small></div></div><div class="swatches">'+''.join(f'<div class="swatch" style="background:{bg};color:{fg}">{bg}<br>{fg} text</div>' for bg,fg in palettes[k])+'</div>'
 identity+=f'<h3>{typeface}</h3><p>{style} Existing, openly licensed typefaces are used for exploration; this is not a claim of custom lettering.</p><div class="application-row">'
 for title,copy in [('Repository header template','Research notes · methods · source links'),('Research paper template','Working draft · author · date · limitations'),('Product endorsement template','A product by Omniasec Labs · ownership and maturity stated separately')]:identity+=f'<div class="application">{mark(k)}<h4>{title}</h4><p>{copy}</p></div>'
 identity+='</div><p class="fine">Website, GitHub, documentation, papers, social/avatar and future product applications must use the same geometry. Symbol-alone use depends on established recognition; always pair it with the full name at first contact. No depicted product or paper is a claim of an existing publication.</p></section>'
identity+='</main>'
(root/'identity.html').write_text(document('Identity explorations',identity,'reviewdoc'))

wires=reviewbar('Homepage / structural studies')+'<main id="main" class="shell"><header class="dochead"><h1>Three different ways in.</h1><p>Structure, reading order and mobile priority are the decision. These wireframes accompany the fully rendered studies; none changes the application.</p></header>'
plans={
 'a':('Research first; evidence before invitation.','Full name + research/work/organizations/about/collaborate/updates','Position / stage / dual action + intended eight-step method','Evidence archive → research standards → two audience paths → founder → dated engineering update','Full name + Menu → positioning → stage → stacked audience actions → collapsed-in-density method (all steps remain visible) → archive'),
 'b':('A working studio; explicit progress gates.','Full name + services-neutral navigation','Large utilitarian statement + stage/actions; full-width numbered process','Method → research approach → evidence rows → collaboration / problem intake → formation → update','Name + Menu → bold statement → purpose and stage → audience actions → two-column process → vertically stacked work'),
 'c':('People and disciplines before the artifact index.','Full name + navigation','Centered shared-problem thesis + stage/actions + convergence motif tied to team formation','Collaborator and organization paths → research → archive → founder → update','Name + Menu → left-aligned thesis → stage/actions → compact confluence → collaborator / organization paths → research / archive')}
for k,(thesis,navtext,herotext,sequence,mobile) in plans.items():
 wires+=f'<section class="reviewsection"><h2>{k.upper()} · {names[k]}</h2><p>{thesis}</p><div class="wire-pair"><div class="wire"><div>{navtext}</div><div class="wirehero"><strong>{names[k]} / desktop</strong>{herotext}</div><div>{sequence}</div><div>Contact · source · security · privacy · terms</div></div><div class="wire"><div>Full name + Menu</div><div class="wirehero"><strong>{names[k]} / phone</strong>{mobile}</div><div>Readable content in source order; no sideways process rail.</div><div>Contact and policies</div></div></div></section>'
wires+='</main>'
(root/'wireframes.html').write_text(document('Homepage and mobile wireframes',wires,'reviewdoc'))
(root/'index.html').write_text(document('Design selection',reviewbar('Design checkpoint')+'<main id="main" class="shell"><header class="dochead"><h1>Omniasec Labs<br>Brand &amp; website studies.</h1><p>Research-informed alternatives for founder review. These are standalone design explorations; the live application remains unchanged. Compare structure and meaning as well as color.</p></header>'+''.join(f'<section class="reviewsection"><h2>{k.upper()} · {names[k]}</h2><p>{descriptions[k][0]} {descriptions[k][3]}</p><div class="direction-links"><a href="{file}">Open homepage study</a><a href="identity.html">Compare identity applications</a><a href="wireframes.html">Compare wireframes</a></div></section>' for k,file in [('a','a-open-register.html'),('b','b-working-assembly.html'),('c','c-common-ground.html')])+'</main>','reviewdoc'))
print('Generated three homepage studies, identity applications, wireframes and selection index.')
