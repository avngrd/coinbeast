$('.__copyButton').click(function (e) {
  $(this).closest('div').find('input').select();
  // console.log($(this).closest("div"));
  document.execCommand('copy');
});

$('.__copyButton').click(function (e) {
  $(this).closest('li').find('input').select();
  // console.log($(this).closest("div"));
  document.execCommand('copy');
});
