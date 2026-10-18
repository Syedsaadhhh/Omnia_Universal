// Prototype-only navigation: preserve the security foundation's Escape/focus intent.
document.querySelectorAll('.mobilenav').forEach(menu=>{
  const toggle=menu.querySelector('summary');
  menu.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.open){menu.open=false;toggle.focus();event.preventDefault();}});
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.open=false;}));
  const media=matchMedia('(min-width:1101px)');
  media.addEventListener('change',event=>{if(event.matches)menu.open=false;});
});
