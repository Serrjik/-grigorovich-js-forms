$(document).ready(function() {

	var formValidation = (function(){

			// Переменные модуля
			isValid: true,
			_button = $('#button');

			// Метод инициализации (запуска) модуля
			var init = function(){
				_setUpListeners(); // Запускаем прослушку событий
			};

			// Метод прослушки событий
			// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
			var _setUpListeners = function(){
				_button.on('click', function(event){
					_validateForm(event);
					_registerEmail(event);
				});
			}

			// Приватные методы

			// _validateForm()
			var _validateForm = function (event) {
				event.preventDefault();

				var form = $('#form'),
					email = $('#email').val().trim(),
					password = $('#password').val().trim(),
					noEmailError = $('<div id="noEmailError" class="notify notify--error mb-20">' + $('#email').attr("data-error-no-email") + '</div>'),
					invalidEmailError = $('<div id="invalidEmailError" class="notify notify--error mb-20">' + $('#email').attr("data-error-invalid-email") + '</div>'),
					noPasswordError = $('<div id="noPasswordError" class="notify notify--error mb-20">' + $('#password').attr("data-error-no-password") + '</div>'),
					takenEmail = $('<div id="takenEmailError" class="notify no-paddings"><div class="notify no-radius-bottom notify--error"> ' 
						+ $('#email').attr("data-error-takenEmail") + '</div><div class="notify no-radius-top">' 
						+ $('#email').attr("data-error-takenEmail-message") 
						+ '</div></div>'),
					userEmail = "mail@mail.com",
					// email address matching pattern
					pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
					valid = true;

				form.find('.notify').remove();

				// Is E-mail valid?
				if ( email.length === 0 ){
					noEmailError.prependTo(form);
					valid = false;
				} else if ( !(pattern.test( email )) ) {
					invalidEmailError.prependTo(form);
					valid = false;
					console.log("Email is INVALID");
				}
				// End  -  Is E-mail valid

				// Is password valid?
				if ( password == '' ) {
					noPasswordError.prependTo(form);
					valid = false;
				} else 	{
					
				}
				// End  -  Is password valid?

				// Is E-mail taken?
				if ( valid ) {
					if ( email !== userEmail ) {
						console.log("Email is VACANT");
					} else {
						takenEmail.prependTo(form);
						valid = false;
						console.log("Email is TAKEN");
					}
				}
				// End  -  Is E-mail taken?

				console.log('Hello from _validateForm()');

				// Hide errors
				$('#email').on('focus', function(){
					form.find('#noEmailError').remove();
					form.find('#invalidEmailError').remove();
				});

				$('#email').on('keydown', function(){
					form.find('#noEmailError').remove();
					form.find('#invalidEmailError').remove();
				});

				$('#password').on('focus', function(){
					form.find('#noPasswordError').remove();
				});

				$('#password').on('keydown', function(){
					form.find('#noPasswordError').remove();
				});
				// End  -  Hide errors

				formValidation.isValid = valid;

			}
			// _validateForm()

			var _registerEmail = function(){
				console.log('formValidation.isValid = ' + formValidation.isValid);
				if ( formValidation.isValid === true ) {
					console.log('Sending form!');
					form.submit();
				} else {
					console.log('Validation FAILED!');
				}
			}

			// Возвращаем публичные медоты, которые будут доступны снаружи
			return {
				init
			}

		}());

	// Запускаем модуль
	formValidation.init();

});