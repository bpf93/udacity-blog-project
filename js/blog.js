const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
})