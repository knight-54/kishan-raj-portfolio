// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// One-time typed line in hero — no scroll triggers, respects reduced motion
const typedEl = document.getElementById('typed');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const line = 'open to Software Engineer roles';

if (typedEl) {
  if (prefersReducedMotion) {
    typedEl.textContent = line;
  } else {
    let i = 0;
    const type = () => {
      if (i <= line.length) {
        typedEl.textContent = line.slice(0, i);
        i++;
        setTimeout(type, 35);
      }
    };
    type();
  }
}
