'use strict';

let factorialNumar = 1;

function calculeazaFactorial() {
	for (let i = 1; i <= 13; i++) {
		factorialNumar *= i;
	}
	console.log(factorialNumar);
}

calculeazaFactorial();
