"use strict";

function load() {
	let xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			document.getElementById('demo').insertAdjacentHTML('afterbegin', this.responseText)
			let xmlDoc = xhr.responseXML
			let table = '<tr><th>Artist</th><th>Record</th></tr>'
			let x = xmlDoc.getElementsByTagName('CD')
			for (let i = 0; i < x.length; i++) {
				console.log(x[i].getElementsByTagName('ARTIST'))
				table +=
					'<tr><td>' +
					x[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue +
					'</td><td>' +
					x[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue +
					'</td></tr>'
			}
			document.getElementById('demo').innerHTML = table;
		}
	}
	xhr.open('GET', 'cd_catalog.xml', true)
	xhr.send()
}