"use strict";

function load() {
	let xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function () {
		switch (this.readyState) {
			case 1: {
				console.log('Соединение с сервером установлено')
				break
			}
			case 2: {
				console.log('Запрос получен')
				break
			}
			case 3: {
				console.log('Обработка запроса')
				break
			}
			case 4: {
				console.log('Запрос обработан и готов ответ')
				break
			}
			case 0: {
				console.log('Запрос не инициализирован')
				break
			}
		}
		if (this.readyState === 4 && this.status === 200) {
			document.getElementById('demo').insertAdjacentHTML('afterbegin', this.responseText)
			console.log(xhr.getAllResponseHeaders())
		}
	}
	xhr.open('GET', 'resp.txt', true)
	xhr.send()
}