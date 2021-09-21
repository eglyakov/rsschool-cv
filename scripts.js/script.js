const nav = document.querySelector('.nav');
const btnNav = document.querySelector('.nav__btn');
btnNav.addEventListener('click', () => {
  nav.classList.toggle('active');
});