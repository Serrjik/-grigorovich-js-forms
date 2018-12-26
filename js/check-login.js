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

				$.each(inputs, function(index, val){
					var input = $(val),
						value = input.val().trim(),
						formGroup = input.parents('.input-form-registration'),
						noEmailError = $('<div class="notify notify--error mb-20">Введите email</div>'),
						tooltip = $('<span>Ошибка!</span>');

					// console.log("index = " + index);
					// console.log("val = " + val);
					// console.log("input = " + input);
					// console.log("value = " + value);

					if ( value.length === 0 ){
						console.log("Here is check of text presence in input field.");
						console.log("formGroup: " + formGroup);
						form.find('.notify--error').remove();
						noEmailError.prependTo(form);
						valid = false;
					}

					// Hide errors
					input.on('focus', function(){
						form.find('.notify--error').remove();
					});

					input.on('keydown', function(){
						form.find('.notify--error').remove();
					});

				});

				formValidation.isValid = valid;

			},

			_sendEmail: function(){
				console.log('formValidation.isValid = ' + formValidation.isValid);
				if ( formValidation.isValid === true ) {
					console.log('Sending form!');
				} else {
					
				}
			}

		};

		formValidation.init();

	}());

});