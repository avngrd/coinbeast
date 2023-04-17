const modalone = document.querySelector('.deposit-wrapper');
const modalWithdraw = document.querySelector('.withdraw-wrapper');
const pageBody = document.querySelector('html');

function modalWindow() {
  if (!modalone.classList.contains('visually-hidden')) {
    pageBody.style.overflowY = 'hidden';
  }
}

modalWindow();

function widthDrawModal() {
  if (!modalWithdraw.classList.contains('visually-hidden')) {
    pageBody.style.overflowY = 'hidden';
  }
}

// widthDrawModal();
