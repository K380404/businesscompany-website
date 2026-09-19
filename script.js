// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form (client-side only — no backend wired up)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!contactForm.checkValidity()) {
    formNote.textContent = 'Please fill in all required fields.';
    formNote.style.color = '#d64545';
    return;
  }

  formNote.textContent = "Thanks! We'll get back to you within one business day.";
  formNote.style.color = '#3d5afe';
  contactForm.reset();
});
