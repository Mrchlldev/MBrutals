/*! MBrutals v0.1.0 | MIT */
(function(){'use strict';
const q=(s,r=document)=>r.querySelector(s), qa=(s,r=document)=>Array.from(r.querySelectorAll(s));
function target(el){const s=el.getAttribute('data-mb-target');return s?q(s):null}
function closeAllDropdowns(except){qa('.mb-dropdown.is-open').forEach(d=>{if(d!==except)d.classList.remove('is-open')})}
function modalOpen(m){if(!m)return;m.classList.add('is-open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';const c=q('[data-mb-dismiss="modal"]',m);if(c)c.focus()}
function modalClose(m){if(!m)return;m.classList.remove('is-open');m.setAttribute('aria-hidden','true');if(!q('.mb-modal.is-open'))document.body.style.overflow=''}
function offcanvasOpen(o){if(!o)return;o.classList.add('is-open');o.setAttribute('aria-hidden','false');let b=q('.mb-offcanvas-backdrop');if(!b){b=document.createElement('div');b.className='mb-offcanvas-backdrop';document.body.appendChild(b);b.addEventListener('click',()=>qa('.mb-offcanvas.is-open').forEach(offcanvasClose))}b.classList.add('is-open');document.body.style.overflow='hidden'}
function offcanvasClose(o){if(!o)return;o.classList.remove('is-open');o.setAttribute('aria-hidden','true');if(!q('.mb-offcanvas.is-open')){const b=q('.mb-offcanvas-backdrop');if(b)b.classList.remove('is-open');document.body.style.overflow=''}}
function toast(message,opts={}){const stack=q('.mb-toast-stack')||(()=>{const x=document.createElement('div');x.className='mb-toast-stack';document.body.appendChild(x);return x})();const t=document.createElement('div');t.className='mb-toast '+(opts.type?'mb-toast-'+opts.type:'mb-toast-info');t.setAttribute('role','status');const body=document.createElement('div');body.innerHTML=opts.title?'<strong>'+opts.title+'</strong><div>'+message+'</div>':message;const c=document.createElement('button');c.className='mb-toast-close';c.type='button';c.setAttribute('aria-label','Close');c.textContent='×';c.onclick=()=>t.remove();t.append(body,c);stack.appendChild(t);if(opts.duration!==0)setTimeout(()=>t.remove(),opts.duration||4500);return t}
window.MBrutals={version:'0.1.0',toast};
document.addEventListener('click',function(e){
 const toggle=e.target.closest('[data-mb-toggle]');
 if(toggle){const type=toggle.getAttribute('data-mb-toggle');const t=target(toggle);
  if(type==='modal'){e.preventDefault();t&&modalOpen(t)}
  else if(type==='dropdown'){e.preventDefault();const d=toggle.closest('.mb-dropdown');closeAllDropdowns(d);d&&d.classList.toggle('is-open')}
  else if(type==='offcanvas'){e.preventDefault();t&&offcanvasOpen(t)}
  else if(type==='collapse'){e.preventDefault();const t2=target(toggle);if(t2){t2.classList.toggle('is-open');toggle.setAttribute('aria-expanded',t2.classList.contains('is-open'))}}
  else if(type==='accordion'){e.preventDefault();const item=toggle.closest('.mb-accordion-item');if(item)item.classList.toggle('is-open')}
  else if(type==='tab'){e.preventDefault();const tabs=toggle.closest('.mb-tabs');if(!tabs)return;qa('.mb-tab',tabs).forEach(x=>x.classList.remove('is-active'));qa('.mb-tab-panel',tabs).forEach(x=>x.classList.remove('is-active'));toggle.classList.add('is-active');const p=target(toggle);p&&p.classList.add('is-active')}
 }
 const dismiss=e.target.closest('[data-mb-dismiss]');
 if(dismiss){const type=dismiss.getAttribute('data-mb-dismiss');if(type==='modal')modalClose(dismiss.closest('.mb-modal'));if(type==='offcanvas')offcanvasClose(dismiss.closest('.mb-offcanvas'))}
 if(e.target.classList.contains('mb-modal'))modalClose(e.target);
 if(!e.target.closest('.mb-dropdown'))closeAllDropdowns();
 const nav=e.target.closest('[data-mb-navbar-toggle]');if(nav){const n=target(nav);if(n){n.classList.toggle('is-open');nav.setAttribute('aria-expanded',n.classList.contains('is-open'))}}
 const prev=e.target.closest('[data-mb-carousel-prev]');const next=e.target.closest('[data-mb-carousel-next]');if(prev)carouselMove(prev.closest('.mb-carousel'),-1);if(next)carouselMove(next.closest('.mb-carousel'),1);
 const dot=e.target.closest('[data-mb-carousel-to]');if(dot)carouselGo(dot.closest('.mb-carousel'),Number(dot.getAttribute('data-mb-carousel-to')));
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){qa('.mb-modal.is-open').forEach(modalClose);qa('.mb-offcanvas.is-open').forEach(offcanvasClose);closeAllDropdowns()}});
function carouselState(c){const track=q('.mb-carousel-track',c),slides=qa('.mb-slide',c);return{track,slides,index:Number(c.dataset.mbIndex||0)}}
function carouselGo(c,i){if(!c)return;const s=carouselState(c);if(!s.slides.length)return;s.index=(i+s.slides.length)%s.slides.length;c.dataset.mbIndex=s.index;s.track.style.transform='translateX(-'+(s.index*100)+'%)';qa('.mb-carousel-dot',c).forEach((d,n)=>d.classList.toggle('is-active',n===s.index))}
function carouselMove(c,d){const s=carouselState(c);carouselGo(c,s.index+d)}
window.addEventListener('load',()=>{qa('.mb-tabs').forEach(t=>{const a=q('.mb-tab.is-active',t)||q('.mb-tab',t);if(a){a.classList.add('is-active');const p=target(a);p&&p.classList.add('is-active')}});qa('.mb-carousel').forEach(c=>carouselGo(c,0));qa('[data-mb-autoplay]').forEach(c=>setInterval(()=>carouselMove(c,1),Number(c.getAttribute('data-mb-autoplay'))||5000))});
})();
