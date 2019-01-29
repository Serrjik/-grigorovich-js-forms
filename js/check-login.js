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
					email = $('#email').val().trim(),
					password = $('#password').val().trim(),
					noEmailError = $('<div id="noEmailError" class="notify notify--error mb-20">' + $('#email').attr("data-error-no-email") + '</div>'),
					noPasswordError = $('<div id="noPasswordError" class="notify notify--error mb-20">' + $('#password').attr("data-error-no-password") + '</div>'),
					invalidEmailError = $('<div id="invalidEmailError" class="notify notify--error mb-20">' + $('#email').attr("data-error-invalid-email") + '</div>'),
					wrongEmailOrPasswordError = $('<div id="wrongEmailOrPasswordError" class="notify no-paddings"><div class="notify no-radius-bottom notify--error">'
						+ $('#password').attr("data-error-invalid-password")
						+ '</div><div class="notify no-radius-top">' +
						$('#password').attr("data-error-invalid-password-message")
						+ '</div></div>'),
					userEmail = "mail@mail.com",
					userPassword = "123",
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

					// Is E-mail & password right?
					if ( valid ) {
						if ( email !== userEmail ) {
							wrongEmailOrPasswordError.prependTo(form);
							valid = false;
							console.log("Email is WRONG");
						} else {
							console.log("Email is RIGHT");
							if ( password !== userPassword ) {
								wrongEmailOrPasswordError.prependTo(form);
								valid = false;
								console.log("Password is WRONG");
							} else {
								console.log("Password is RIGHT");
							}
						}
					}
					// End  -  Is E-mail & password right?

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

			},
			// End --- _validateForm()

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