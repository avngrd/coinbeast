const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header-nav');

function burgerAnimation() {
  burger.classList.toggle('active');
  navigation.classList.toggle('open');
}

burger.addEventListener('click', burgerAnimation);
