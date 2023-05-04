// jquery.bpopup.min.js
var bPopup = null;
function modal(obj) {
  obj = $(obj);
  var modalHref = obj.data("modal-herf");
  if (bPopup != null) {
    bPopup.close();
  }

  bPopup = $(modalHref).bPopup({
    // follow: [true,true],
	'positionStyle': "fixed",
    escClose: true,
  });
}
