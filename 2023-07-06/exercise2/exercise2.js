'use strict';

const button = document.querySelector('button');

const img1 = document.querySelector('#a1');
const img2 = document.querySelector('#a2');
const img3 = document.querySelector('#a3');

function clickHandler() {
	const number = parseFloat(prompt('Introdu numarul ales: '));
	if (number < 100) {
		img1.style.visibility = 'visible';
		img2.style.display = 'visible';
		img3.style.visibility = 'visible';
	} else if (number === 100) {
		img1.style.visibility = 'visible';
		img2.style.visibility = 'visible';
		img3.style.visibility = 'hidden';
	} else {
		img1.style.visibility = 'visible';
		img2.style.visibility = 'hidden';
		img3.style.visibility = 'hidden';
	}
}

button.addEventListener('click', clickHandler);
