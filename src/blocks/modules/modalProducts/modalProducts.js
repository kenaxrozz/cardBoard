// $(document).ready(function () {
    $('.products-block__button').on('click', function () {
        $('.overlay-products').show();
    });
    // $('.popup-products__close').on('click', function () {
    //     $('.overlay-products').hide();
    // });
    // закрыть popup спасибо (плавно)
	$('.popup-products__close').click(function () {
		// по клику на крестик
		$('.overlay-products').fadeOut();
	});
	$(document).mouseup(function (e) {
		// по клику вне попапа
		var popup = $('.popup-products');

		if (e.target != popup[0] && popup.has(e.target).length === 0) {
			$('.overlay-products').fadeOut();
		}
	});
// // });