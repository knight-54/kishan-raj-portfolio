/* ==========================================================================
   Kishan Raj — Portfolio Production JavaScript
   Features: Automated dynamic footer year, accessible mobile navigation menu,
   and character-by-character typing effect (respects prefers-reduced-motion).
   ========================================================================== */

// 1. Dynamic Footer Year Configuration
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

// 2. Mobile Responsive Navigation Configuration
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  // Toggle visibility status via trigger element
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Automatically collapse overlay upon item interaction
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// 3. One-Time Vanilla Micro-Typing Animation Engine
const typedEl = document.getElementById('typed');
const lineToType = 'turning complex challenges into clean, efficient and scalable code.';

if (typedEl) {
  // Respect system settings requesting decreased animation overhead
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Render string instantaneously for accessibility comfort
    typedEl.textContent = lineToType;
  } else {
    let characterIndex = 0;
    
    const executeTypingSequence = () => {
      if (characterIndex <= lineToType.length) {
        // Sequentially build up string content 
        typedEl.textContent = lineToType.slice(0, characterIndex);
        characterIndex++;
        // Maintain consistent pacing interval per keystroke tick (35ms)
        setTimeout(executeTypingSequence, 35);
      }
    };
    
    // Fire event instantly as script finishes loading on runtime initialization
    executeTypingSequence();
  }
}
