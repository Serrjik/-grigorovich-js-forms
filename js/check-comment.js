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

			// Метод прослушки событий
			// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
			var _setUpListeners = function(){

				_form.on('submit', function(event){
					_formValidate(event);
				});
			}

			// Приватные методы

			var _formValidate = function (event) {
				// event.preventDefault();

				if ( _commentTextarea.val() == '' ) {
					// _commentErrorEmpty.removeClass('error--hide');
					_commentErrorEmpty.fadeIn(1000);
					event.preventDefault();
				} else {
					_commentErrorEmpty.fadeOut(1000);
					console.log("Hello from _formValidate(), block else");
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