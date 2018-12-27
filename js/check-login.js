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
						noPasswordError = $('<div class="notify notify--error mb-20">Введите пароль</div>'),
						invalidEmailError = $('<div class="notify notify--error mb-20">Неверный формат email</div>'),
						wrongEmailOrPasswordError = $('<div class="notify no-paddings"><div class="notify no-radius-bottom notify--error">Неверный email или пароль</div><div class="notify no-radius-top"><p>Введите верные данные для входа или воспользуйтесь <a href="#!">восстановлением пароля </a>, чтобы войти на сайт.</p></div></div>'),
						tooltip = $('<span>Ошибка!</span>'),
						userEmail = "mail@mail.com",
						userPassword = "123";

					// console.log("index = " + index);
					// console.log("val = " + val);
					// console.log("input = " + input);
					// console.log("value = " + value);

					// Is length of text input = 0?
					if ( value.length === 0 ){
						console.log("form: " + form);
						form.find('.notify').remove();
						switch ( input.attr('type').toLowerCase() ) {
							case 'email':
								noEmailError.prependTo(form);
								break;
							case 'password':
								noPasswordError.prependTo(form);
								break;
						}
						valid = false;
					} else {
						form.find('.notify').remove();
						console.log("input.attr('type') = " + input.attr('type') );

						// Is E-mail right?
						if ( input.attr('type').toLowerCase() === 'email' ) {
							if ( value !== '' ) {
								// email address matching pattern
								var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
								if ( pattern.test( value ) ) {
									form.find('.notify').remove();
									console.log("Email is VALID");

									if ( value !== userEmail ) {
										form.find('.notify').remove();
										wrongEmailOrPasswordError.prependTo(form);
										valid = false;
										console.log("Email is WRONG");
									} else {
										form.find('.notify').remove();
										console.log("Email is RIGHT");
									}
								} else {
									form.find('.notify').remove();
									invalidEmailError.prependTo(form);
									valid = false;
									console.log("Email is INVALID");
								}
							}
						}
						// End  -  Is E-mail right?

						// Is password right?
						if ( input.attr('type').toLowerCase() === 'password' ) {
							if ( value !== '' ) {
								if ( value !== userPassword ) {
									form.find('.notify').remove();
									wrongEmailOrPasswordError.prependTo(form);
									valid = false;
									console.log("Password is WRONG");
								} else {
									form.find('.notify').remove();
									console.log("Password is RIGHT");
								}
							}
						}
						// End  -  Is password right?
				}
					// End  -  Is length of text input = 0?

					// Hide errors
					input.on('focus', function(){
						form.find('.notify').remove();
					});

					input.on('keydown', function(){
						form.find('.notify').remove();
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