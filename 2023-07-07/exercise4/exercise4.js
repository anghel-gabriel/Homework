'use strict';

let factorialNumar = 1;

function calculeazaFactorial(numar) {
	for (let i = 1; i <= numar; i++) {
		factorialNumar *= i;
	}
	console.log(factorialNumar);
}

calculeazaFactorial(5);
