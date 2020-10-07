new WOW().init();

	$(document).ready(function () {
		$('#offer-form').validate({
			rules: {
				username:{
					required: true,
					minlength: 2,
					maxlength: 15
				},
				phone: {
					required: true,
				}
			},
				errorElement: 'em',
				errorClass: 'oferErorr',
				messages: {
					username: {
						required: "Укажите имя",
						minlength: jQuery.validator.format("Осталось символов :{0} "),
						maxlength: jQuery.validator.format("Введите корректное имя")
					},
					phone: {
						required: "Укажите ваш телефон"
				}
				}
		
		});

		$('#modal-form').validate({
			rules: {
				username:{
					required: true,
					minlength: 2
				},
				phone: {
					required: true,
				}
			},
			errorElement: 'em',
			errorClass: 'formErorr',
			messages: {
					username: {
						required: "Укажите имя",
						minlength: jQuery.validator.format("Осталось символов :{0} "),
						maxlength: jQuery.validator.format("Введите корректное имя")
					},
					phone: {
						required: "Укажите ваш телефон"
				}

				}
			});

		$('#brif-form').validate({
			rules: {
				phone: "Укажите телефон",
				username:{
					required: true,
					minlength: 2,
					maxlength: 15
				},
				email: {
					required: true,
					email: true
					},
				phone: {
					required: true,
				}

				},
				errorElement: 'em',
				errorClass: 'invalid',
				messages: {
					username: {
						required: "Укажите имя",
						minlength: jQuery.validator.format("Осталось символов :{0} "),
						maxlength: jQuery.validator.format("Ввелите корректное имя")
					},
					
					email:{
						required: "Укажите ваш email",
						email: "Введите корректный email"

					},
					phone: {
						required: "Укажите ваш телефон"
				}
			}
			});
			
		$('.phone').mask('+7 (999) 999-99-99');
		/*Настройка слайдера*/
		$('.slider').slick({
			 slidesToShow: 3,
			 slidesToScroll: 1,
			 prevArrow: $('.arrows__left'),
			 nextArrow: $('.arrows__right'),
			 responsive: [
			 {
			 	breakpoint: 1200,
			 	settings: {
			 		slidesToShow: 2,
			 		slidesToScroll: 1,
			 	}
			 },
			 {
			 	breakpoint: 760,
			 	settings: {
			 		slidesToShow: 1,
			 		slidesToScroll: 1
			 	}
			 }
			]
		});
	});