'use strict';

let counter = 0;
const cuvantDeGhicit = 'Bingo';

// while (counter < 10) {
// 	const input = prompt('Introdu valoarea dorită: ');
// 	counter++;
// 	if (input === cuvantDeGhicit) {
// 		console.log('Ai nimerit!');
// 		break;
// 	}
// 	if (counter === 10) {
// 		console.log('Măcar ai încercat.');
// 		break;
// 	} else console.log('Nu ai nimerit. Mai încearcă!');
// }

do {
	const input = prompt('Introdu valoarea dorită: ');
	counter++;
	if (input === cuvantDeGhicit) {
		console.log('Ai nimerit!');
		break;
	}
	if (counter === 10) {
		console.log('Măcar ai încercat.');
		break;
	} else console.log('Nu ai nimerit. Mai încearcă!');
} while (counter < 10);
