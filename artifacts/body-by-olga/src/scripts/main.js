// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('v'); }),
  { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
);
document.querySelectorAll('.r').forEach(el => revealObserver.observe(el));

// Nav scroll state
const nav = document.getElementById('nav');
if (nav) {
  const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
}

// Mobile nav toggle
const navToggle = document.getElementById('nt');
const navLinks = document.getElementById('nk');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
    }
  });
});

// Mobile flip card tap support
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function () {
    if (window.innerWidth <= 1024) {
      document.querySelectorAll('.flip-card.tapped').forEach(c => {
        if (c !== this) c.classList.remove('tapped');
      });
      this.classList.toggle('tapped');
    }
  });
});
