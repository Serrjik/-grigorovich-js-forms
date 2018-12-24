$(document).ready(function() {

	var commentFormCheck = (function(){

			// Переменные модуля
			var _form = $('#comment-add-form');
			var _commentTextarea = $('#commentText');
			var _commentErrorEmpty = $('#commentErrorEmpty');

			// Метод инициализации (запуска) модуля
			var init = function(){
				_setUpListeners(); // Запускаем прослушку событий
			}

			// Приватные методы

			// Метод прослушки событий
			// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
			var _setUpListeners = function(){

				_form.on('submit', function(event){
					_formValidate(event);
				});
			}

			var _formValidate = function (event) {

				if ( _commentTextarea.val().trim() == '' ) {
					// _commentErrorEmpty.removeClass('error--hide');
					event.preventDefault();
					_commentErrorEmpty.fadeIn(1000);
				} else {
					console.log("Hello from _formValidate(), block else");
					_commentErrorEmpty.fadeOut(1000);
					// $('form').unbind('submit').submit();
				}

				// console.log(_commentTextarea.val());

			}

			// Возвращаем публичные медоты, которые будут доступны снаружи
			return {
				init
			}
		
		}());

		// Запускаем модуль
	commentFormCheck.init();

});