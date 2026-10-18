"""Authoring only. Requires FontTools4.61.1 and Brotli1.2.0; not part of app install/build."""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools import subset
import shutil,json,hashlib
root=Path('docs/brand-reconstruction/concepts/fonts');out=Path('public/fonts');out.mkdir(exist_ok=True);rows=[]
for family,file,axes,name in [('literata','literata-Literata-opsz-wght.ttf',{'wght':400,'opsz':48},'literata-latin-regular.woff2'),('schibstedgrotesk','schibstedgrotesk-SchibstedGrotesk-wght.ttf',{'wght':(400,700)},'schibsted-latin.woff2')]:
 font=instantiateVariableFont(TTFont(root/file),axes,inplace=False);opts=subset.Options();opts.flavor='woff2';opts.layout_features=['*'];sub=subset.Subsetter(options=opts);sub.populate(unicodes=list(range(32,383))+list(range(0x2000,0x2070)));sub.subset(font);font.flavor='woff2';font.save(out/name)
 if family=='schibstedgrotesk':
  og=instantiateVariableFont(TTFont(root/file),{'wght':600},inplace=False);ss=subset.Subsetter();ss.populate(unicodes=list(range(32,383))+list(range(0x2000,0x2070)));ss.subset(og);og.save(out/'schibsted-og.ttf')
 shutil.copyfile(root/(family+'-OFL.txt'),out/(family+'-OFL.txt'));rows.append({'font':name,'bytes':(out/name).stat().st_size,'sha256':hashlib.sha256((out/name).read_bytes()).hexdigest(),'original':file,'axes':axes,'ranges':['U+0020–017E','U+2000–206F'],'license':'SIL OFL1.1'})
Path('docs/frontend-implementation/evidence/fonts.json').write_text(json.dumps({'tool':'FontTools4.61.1/brotli1.2.0, authoring only','files':rows,'totalBytes':sum(x['bytes'] for x in rows)},indent=2)+'\n');print(rows)
