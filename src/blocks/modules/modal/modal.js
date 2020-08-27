// $(document).ready(function () {
    $('.header-contacts__button, .button-products, .button-contacts').on('click', function () {
        $('.overlay').show();
    });
    // $('.popup-close').on('click', function () {
    //     $('.overlay').hide();
    // });

    // закрыть popup спасибо
	$('.popup-close').click(function () {
		// по клику на крестик
		$('.overlay').fadeOut();
	});
	$(document).mouseup(function (e) {
		// по клику вне попапа
		var popup = $('.popup');

		if (e.target != popup[0] && popup.has(e.target).length === 0) {
			$('.overlay').fadeOut();
		}
	});
// маска для телефона  // отменяем автоочистку формы при клике
// input через type, а не id
    $("input[type='tel']").mask("+7 (999) 999-99-99",{autoclear: false});

// });
