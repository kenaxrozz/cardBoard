// $(document).ready(function () {
	$('#contact').submit(function () {
		var errors = false;
		$(this).find('span').empty();
		$(this).find('input').each(function () {
			if ($.trim($(this).val()) == '') {
				errors = true;
				// $(this).next().text('Не заполнено поле ' + $(this).prev().text());
			}
		});

		if (!errors) {
			var data = $('#contact').serialize();
			$.ajax({
				url: 'mailer/smart.php',
				type: 'POST',
				data: data,
				// Пока идет отправка высвечивается текст
				//   beforeSend: function beforeSend() {
				// 	$('#submit').next().text('Отправляю...');
				//   },
				success: function (res) {
					if (res == 1) {
						$('#contact').find('input, textarea, .span').val('');
						$('#submit').next().empty();
						$('.overlay-success').show();
					} else {
						$('#submit').next().empty();
						alert('Ошибка отправки');
					}
				},
				error: function () {
					alert('Ошибка');
				},
			});
		}

		return false;
	}); 

	$('#contactModal').submit(function () {
			var errors = false;
			$(this).find('span').empty();
			$(this).find('input').each(function () {
				if ($.trim($(this).val()) == '') {
					errors = true;
					// $(this).next().text('Не заполнено поле ' + $(this).prev().text());
				}
			});
	
			if (!errors) {
				var data = $('#contactModal').serialize();
				// var data = $('.testContact').serialize();
				$.ajax({
					url: 'mailer/smart.php',
					type: 'POST',
					data: data,
					// Пока идет отправка высвечивается текст
					//   beforeSend: function beforeSend() {
					// 	$('#submit').next().text('Отправляю...');
					//   },
					success: function (res) {
						if (res == 1) {
							$('#contact').find('input, textarea, .span').val('');
							$('#submit').next().empty();
							$('.overlay-success').show();
						} else {
							$('#submit').next().empty();
							alert('Ошибка отправки');
						}
					},
					error: function () {
						alert('Ошибка');
					},
				});
			}
	
			return false;
		});

		$('#contactProducts').submit(function () {
				var errors = false;
				$(this).find('span').empty();
				$(this).find('input').each(function () {
					if ($.trim($(this).val()) == '') {
						errors = true;
						// $(this).next().text('Не заполнено поле ' + $(this).prev().text());
					}
				});
		
				if (!errors) {
					var data = $('#contactProducts').serialize();
					$.ajax({
						url: 'mailer/smart.php',
						type: 'POST',
						data: data,
						// Пока идет отправка высвечивается текст
						//   beforeSend: function beforeSend() {
						// 	$('#submit').next().text('Отправляю...');
						//   },
						success: function (res) {
							if (res == 1) {
								$('#contact').find('input, textarea, .span').val('');
								$('#submit').next().empty();
								$('.overlay-success').show();
							} else {
								$('#submit').next().empty();
								alert('Ошибка отправки');
							}
						},
						error: function () {
							alert('Ошибка');
						},
					});
				}

				return false;
			});

			$('#contactOffer').submit(function () {
					var errors = false;
					$(this).find('span').empty();
					$(this).find('input').each(function () {
						if ($.trim($(this).val()) == '') {
							errors = true;
							// $(this).next().text('Не заполнено поле ' + $(this).prev().text());
						}
					});
			
					if (!errors) {
						var data = $('#contactOffer').serialize();
						$.ajax({
							url: 'mailer/smart.php',
							type: 'POST',
							data: data,
							// Пока идет отправка высвечивается текст
							//   beforeSend: function beforeSend() {
							// 	$('#submit').next().text('Отправляю...');
							//   },
							success: function (res) {
								if (res == 1) {
									$('#contact').find('input, textarea, .span').val('');
									$('#submit').next().empty();
									$('.overlay-success').show();
								} else {
									$('#submit').next().empty();
									alert('Ошибка отправки');
								}
							},
							error: function () {
								alert('Ошибка');
							},
						});
					}
			
					return false;
				});

				// закрыть popup спасибо
	$('.popup-success__close').click(function () {
		// по клику на крестик
		$('.overlay-success ').fadeOut();
	});
	$(document).mouseup(function (e) {
		// по клику вне попапа
		var popup = $('.popup-success');

		if (e.target != popup[0] && popup.has(e.target).length === 0) {
			$('.overlay-success ').fadeOut();
		}
	});
// });