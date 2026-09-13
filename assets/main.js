'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
// 設定：実際のURLを入れるとリンクが有効になります。
const CROWDWORKS_PROFILE_URL = 'CROWDWORKS_PROFILE_URL';
const contactLink = document.querySelector('#crowdworks-link');
if (/^https:\/\/crowdworks\.jp\//.test(CROWDWORKS_PROFILE_URL)) {
  contactLink.href = CROWDWORKS_PROFILE_URL;
  contactLink.target = '_blank';
  contactLink.rel = 'noopener noreferrer';
} else {
  contactLink.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('#contact-status').textContent = '相談先は現在準備中です。クラウドワークスのプロフィールURL設定後にご利用いただけます。';
  });
}
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
  document.querySelectorAll('.service-grid article, .work-card, .strength-grid article, .flow-grid li').forEach(element => { element.classList.add('reveal-ready'); observer.observe(element); });
}
