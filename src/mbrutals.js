/* MBrutals v1.6.2 interactions */
(() => {
  const qs=(s,r=document)=>r.querySelector(s), qsa=(s,r=document)=>[...r.querySelectorAll(s)];
  const openBackdrop=()=>qs('.mb-backdrop')?.classList.add('is-open');
  const closeBackdrop=()=>qs('.mb-backdrop')?.classList.remove('is-open');

  qsa('[data-mb-modal]').forEach(b=>b.addEventListener('click',()=>{
    qs('#'+b.dataset.mbModal)?.classList.add('is-open'); openBackdrop();
  }));
  qsa('[data-mb-close]').forEach(b=>b.addEventListener('click',()=>{
    b.closest('.mb-modal')?.classList.remove('is-open'); closeBackdrop();
  }));

  qsa('[data-mb-drawer]').forEach(b=>b.addEventListener('click',()=>{
    qs('#'+b.dataset.mbDrawer)?.classList.add('is-open'); openBackdrop();
  }));
  qsa('.mb-backdrop').forEach(b=>b.addEventListener('click',()=>{
    qsa('.mb-modal.is-open,.mb-drawer.is-open').forEach(x=>x.classList.remove('is-open')); closeBackdrop();
  }));

  qsa('.mb-dropdown > .mb-btn').forEach(b=>b.addEventListener('click',e=>{
    e.stopPropagation(); b.parentElement.classList.toggle('open');
  }));
  document.addEventListener('click',()=>qsa('.mb-dropdown.open').forEach(x=>x.classList.remove('open')));

  qsa('.mb-tab').forEach(tab=>tab.addEventListener('click',()=>{
    const wrap=tab.closest('[data-mb-tabs]'); const target=tab.dataset.target;
    qsa('.mb-tab',wrap).forEach(x=>x.classList.remove('active'));
    qsa('.mb-tab-panel',wrap).forEach(x=>x.classList.remove('active'));
    tab.classList.add('active'); qs('#'+target)?.classList.add('active');
  }));

  qsa('.mb-acc-trigger').forEach(t=>t.addEventListener('click',()=>{
    const panel=t.nextElementSibling, item=t.parentElement;
    const active=item.classList.toggle('active');
    panel.style.maxHeight=active ? panel.scrollHeight+'px' : '0px';
  }));

  window.mbToast=(message,type='info')=>{
    let wrap=qs('.mb-toast-wrap'); if(!wrap){wrap=document.createElement('div');wrap.className='mb-toast-wrap';document.body.append(wrap)}
    const toast=document.createElement('div'); toast.className='mb-toast';
    toast.innerHTML=`<strong>${type==='success'?'✓':type==='danger'?'!':'✦'}</strong><span>${message}</span>`;
    wrap.append(toast); setTimeout(()=>{toast.style.opacity='0';toast.style.transform='translateX(30px)';setTimeout(()=>toast.remove(),220)},3500);
  };

  qsa('[data-mb-toast]').forEach(b=>b.addEventListener('click',()=>mbToast(b.dataset.mbToast,b.dataset.type||'info')));

  qsa('[data-mb-copy]').forEach(b=>b.addEventListener('click',async()=>{
    const target=qs(b.dataset.mbCopy); if(!target)return;
    await navigator.clipboard.writeText(target.innerText || target.textContent || '');
    const old=b.textContent;b.textContent='Copied!';setTimeout(()=>b.textContent=old,1200);
  }));

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){qsa('.mb-modal.is-open,.mb-drawer.is-open').forEach(x=>x.classList.remove('is-open'));closeBackdrop();}
  });
})();