// LOADER
//window.addEventListener('load',()=>{setTimeout(()=>{document.getElementById('loader').classList.add('out')},2200)});

// TIMECODE
const tcEl=document.getElementById('tc');
let fr=0;
setInterval(()=>{
  fr++;
  const f=fr%24,s=Math.floor(fr/24)%60,m=Math.floor(fr/1440)%60,h=Math.floor(fr/86400);
  const p=n=>String(n).padStart(2,'0');
  if(tcEl) tcEl.textContent=`${p(h)}:${p(m)}:${p(s)}:${p(f)}`;
},41.67);

// NAV
const nav=document.getElementById('mn');
window.addEventListener('scroll',()=>{nav.classList.toggle('sc',scrollY>60)},{passive:true});

// SCROLL REVEAL
const ro=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv,.rvl').forEach(el=>ro.observe(el));

// CURSOR
const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let rx=0,ry=0,mx=0,my=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cd.style.left=mx+'px';cd.style.top=my+'px';
});
(function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop)})();
document.querySelectorAll('a,.qcard,.qa-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cd.style.width='10px';cd.style.height='10px';cr.style.width='54px';cr.style.height='54px';cr.style.borderColor='var(--amber)'});
  el.addEventListener('mouseleave',()=>{cd.style.width='6px';cd.style.height='6px';cr.style.width='36px';cr.style.height='36px';cr.style.borderColor='rgba(212,146,42,.45)'});
});

// QUOTE SPOTLIGHT
document.querySelectorAll('.qcard').forEach(c=>{
  c.addEventListener('mousemove',e=>{
    const r=c.getBoundingClientRect();
    c.style.setProperty('--mx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');
    c.style.setProperty('--my',((e.clientY-r.top)/r.height*100).toFixed(1)+'%');
  });
});