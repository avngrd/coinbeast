// jquery.bpopup.min.js

function modal(obj)
{
	obj = $(obj);
	var modalHref = obj.data('modal-herf');
	$(modalHref).bPopup();
}
