const container = document.querySelector('.container');
const open = document.getElementById('open');
const close = document.getElementById('close');
const body = document.getElementsByTagName('body')[0];
const html = document.getElementsByTagName('html')[0];

open.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  window.scrollTo(0, 0);
  container.classList.add('show-nav');
  html.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  container.classList.remove('show-nav');
  body.style.overflow = 'scroll';
  html.style.overflow = 'scroll';
});
