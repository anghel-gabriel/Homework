'use strict';

function creazaPatrat(lungimeLatura) {
	for (let r = 0; r < lungimeLatura; r++) {
		let linieDesenata = '';
		for (let c = 0; c < lungimeLatura; c++) {
			if (r === 0 || r === lungimeLatura - 1 || c === 0 || c === lungimeLatura - 1) {
				linieDesenata += '*  ';
			} else {
				linieDesenata += '   ';
			}
		}
		console.log(linieDesenata);
	}
}

creazaPatrat(20);
