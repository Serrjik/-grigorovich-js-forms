$(document).ready(function() {

	var formValidation = (function(){

			// Переменные модуля
			isValid: true,
			_button = $('#button');

			// Метод инициализации (запуска) модуля
			var init = function(){
				_setUpListeners(); // Запускаем прослушку событий
			}

			// Метод прослушки событий
			// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
			var _setUpListeners = function(){
				_button.on('click', function(event){
					_validateForm(event);
				});
			}

			// Приватные методы

			var _validateForm = function (event) {
				event.preventDefault();
				console.log('Hello from _validateForm()');
			}

			// Возвращаем публичные медоты, которые будут доступны снаружи
			return {
				init
			}

		}());

	// Запускаем модуль
	formValidation.init();

});