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

// if (window.innerWidth <= 650) {
//   coinWorkLogo.classList.add('active');
//   workerMenu.classList.add('active');
//   closeMenuButton.classList.add('active');
//   menuItem.forEach((elem) => {
//     elem.classList.add('active');
//   });
// } else {
//   coinWorkLogo.classList.remove('active');
//   workerMenu.classList.remove('active');
//   closeMenuButton.classList.remove('active');
//   menuItem.forEach((elem) => {
//     elem.classList.remove('active');
//   });
// }
