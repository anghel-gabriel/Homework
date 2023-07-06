'use strict';

const paragraph = document.querySelector('#details');
const button = document.querySelector('button');

const number1 = parseFloat(prompt('Introdu primul numar: '));
const number2 = parseFloat(prompt('Introdu al doilea numar: '));
const sum = number1 + number2;

function clickHandler() {
	paragraph.textContent = number1 + number2;
	if (sum > 100) paragraph.style.color = 'blue';
	else paragraph.style.color = 'red';
}

button.addEventListener('click', clickHandler);
