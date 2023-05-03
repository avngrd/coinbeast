const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header-nav');

function burgerAnimation() {
  burger.classList.toggle('active');
  navigation.classList.toggle('open');
}

burger.addEventListener('click', burgerAnimation);

var mobile_menu = $('.balance-page__menu');
$('.mobile-dop_menu').on('click', function (e) {
  if (mobile_menu.hasClass('activ')) {
    mobile_menu.removeClass('activ');
  } else {
    mobile_menu.addClass('activ');
  }
});

$('.balance-page__menu').on('click', function (e) {
  console.log(1);
  if ($(e.target).hasClass('balance-page__menu')) {
    mobile_menu.removeClass('activ');
  }
});


$(".select-coin").on('click', function (e) {
  var item = $(this).closest(".select-coin__block").find(".coin-select__list");
  console.log(item.css("display"));
  if(item.css("display") == "block")
  {
    item.slideUp();
  } else 
  {
    item.slideDown();
  }
});