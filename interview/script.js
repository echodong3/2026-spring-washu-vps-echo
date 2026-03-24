// ===========================
// LOADER
// ===========================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1400);
  });
  
  
  // ===========================
  // SCROLL REVEAL
  // ===========================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });
  
  // Add reveal classes and observe
  document.querySelectorAll('.qa-block, .quote-card, .intro-col-left, .intro-col-right, .stat').forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 3 === 1) el.classList.add('reveal-delay-1');
    if (i % 3 === 2) el.classList.add('reveal-delay-2');
    revealObserver.observe(el);
  });
  
  
  // ===========================
  // ACTIVE NAV SECTION
  // ===========================
  const sections = document.querySelectorAll('section[id]');
  
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.nav a[href="#${id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  
  sections.forEach(s => navObserver.observe(s));
  
  
  // ===========================
  // FILMSTRIP PARALLAX (subtle)
  // ===========================
  const filmstripDivider = document.querySelector('.filmstrip-divider .strip-frames');
  
  if (filmstripDivider) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const offset = (scrollY * 0.06) % 80;
      filmstripDivider.style.transform = `translateX(-${offset}px)`;
    }, { passive: true });
  }
  
  
  // ===========================
  // QUOTE CARDS — hover tilt
  // ===========================
  document.querySelectorAll('.quote-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
    });
  });
  
  
  // ===========================
  // SMOOTH CURSOR DOT
  // ===========================
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: #1A1612;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: transform 0.08s ease, width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
    mix-blend-mode: multiply;
  `;
  document.body.appendChild(cursor);
  
  const cursorRing = document.createElement('div');
  cursorRing.style.cssText = `
    position: fixed;
    width: 32px;
    height: 32px;
    border: 1px solid rgba(26,22,18,0.3);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9997;
    transform: translate(-50%, -50%);
    transition: left 0.12s ease, top 0.12s ease, width 0.2s ease, height 0.2s ease;
  `;
  document.body.appendChild(cursorRing);
  
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });
  
  document.querySelectorAll('a, .quote-card, .qa-block').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      cursorRing.style.width = '48px';
      cursorRing.style.height = '48px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursorRing.style.width = '32px';
      cursorRing.style.height = '32px';
    });
  });