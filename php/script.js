"use strict";

function showHint(str) {
	let xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			document.getElementById('txtHint').innerHTML = this.responseText
		}
	}
	xhr.open('GET', 'getHint.php?q=' + str, true)
	xhr.send()
}