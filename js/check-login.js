$(document).ready(function() {

	(function(){

		var formValidation = {

			isValid: true,

			init: function(){
				// вызов внутренних функций
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('#buttonSubmit').on('click', formValidation._validateForm).on('click', formValidation._sendEmail);
			},

			_validateForm: function(event){
				event.preventDefault();
				var form = $('#form'),
					inputs = form.find('input'),
					valid = true;

				// Loop through each input field
				$.each(inputs, function(index, val){
					var input = $(val),
						value = input.val().trim(),
						formGroup = input.parents('.input-form-registration'),
						noEmailError = $('<div class="notify notify--error mb-20">Введите email</div>'),
						invalidEmailError = $('<div class="notify notify--error mb-20">Неверный формат email</div>'),
						wrongEmailOrPasswordError = $('<div class="notify no-paddings"><div class="notify no-radius-bottom notify--error">Неверный email или пароль</div><div class="notify no-radius-top"><p>Введите верные данные для входа или воспользуйтесь<a href="#!">восстановлением пароля </a>, чтобы войти на сайт.</p></div></div>'),
						tooltip = $('<span>Ошибка!</span>'),
						userEmail = "mail@mail.com",
						userPassword = "123";

					// console.log("index = " + index);
					// console.log("val = " + val);
					// console.log("input = " + input);
					// console.log("value = " + value);

					if ( value.length === 0 ){
						// console.log("Here is check of text presence in input field.");
						console.log("formGroup: " + formGroup);
						form.find('.notify--error').remove();
						noEmailError.prependTo(form);
						valid = false;
					} else {
						form.find('.notify--error').remove();
					}

					console.log("input.attr('type') = " + input.attr('type') );

					if ( input.attr('type').toLowerCase() === 'email' ) {
						if ( value !== '' ) {
							// email address matching pattern
							var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
							if ( pattern.test( value ) ) {
								form.find('.notify--error').remove();
								console.log("Email is VALID");

								if ( value !== userEmail ) {
									form.find('.notify--error').remove();
									wrongEmailOrPasswordError.prependTo(form);
									valid = false;
									console.log("Email is WRONG");
								} else {
									form.find('.notify--error').remove();
									console.log("Email is RIGHT");
								}
							} else {
								form.find('.notify--error').remove();
								invalidEmailError.prependTo(form);
								valid = false;
								console.log("Email is INVALID");
							}
						}
					}

					// Hide errors
					input.on('focus', function(){
						form.find('.notify--error').remove();
					});

					input.on('keydown', function(){
						form.find('.notify--error').remove();
					});

				});
				// End --- Loop through each input field

				formValidation.isValid = valid;

			},

			_sendEmail: function(){
				console.log('formValidation.isValid = ' + formValidation.isValid);
				if ( formValidation.isValid === true ) {
					console.log('Sending form!');
					form.submit();
				} else {
					console.log('Validation FAILED!');
				}
			}

		};

		formValidation.init();

	}());

});