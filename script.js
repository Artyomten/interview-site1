// Menu open / close (works on every page)
const menu = document.getElementById('menu');
const openBtn = document.getElementById('menuOpen');
const closeBtn = document.getElementById('menuClose');

function setMenu(open) {
  if (!menu) return;
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
}
if (openBtn) openBtn.addEventListener('click', () => setMenu(true));
if (closeBtn) closeBtn.addEventListener('click', () => setMenu(false));
if (menu) menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Contact form validation (only on contact.html)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk || !message) {
      status.textContent = 'Please fill in all fields with a valid email.';
      status.className = 'form__status error';
      return;
    }
    status.textContent = 'Thank you! Your message has been sent.';
    status.className = 'form__status';
    form.reset();
  });
}
