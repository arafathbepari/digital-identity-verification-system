const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  nav?.classList.toggle('open', !open);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
  nav.classList.remove('open');
}));
const demo = document.querySelector('#demo');
const message = document.querySelector('#message');
const status = document.querySelector('#status');
demo?.addEventListener('click', () => {
  if (demo.disabled) return;
  demo.disabled = true;
  message.textContent = 'Running a simulated check…';
  status.className = 'working';
  demo.innerHTML = 'Checking <span>…</span>';
  window.setTimeout(() => {
    message.textContent = 'Sample complete — no personal data used';
    status.className = 'success';
    demo.innerHTML = 'Run sample again <span>↻</span>';
    demo.disabled = false;
  }, 1000);
});
document.querySelector('#year').textContent = new Date().getFullYear();
