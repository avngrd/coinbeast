const closeMenuButton = document.querySelector('.close-menu');
const coinWorkLogo = document.querySelector('.coinwork-logo');
const menuItem = document.querySelectorAll('.menu-item');
const workerMenu = document.querySelector('.worker-menu');

function closeWorkMenu() {
  coinWorkLogo.classList.toggle('active');
  workerMenu.classList.toggle('active');
  closeMenuButton.classList.toggle('active');

  menuItem.forEach((elem) => {
    elem.classList.toggle('active');
  });
}

closeMenuButton.addEventListener('click', closeWorkMenu);
