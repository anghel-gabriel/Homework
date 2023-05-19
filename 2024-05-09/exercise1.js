/* Declararea persoanelor */
const persoana1 = {
	nume: "Duhanes",
	prenume: "Andrei",
	anulNasterii: 1990,
	resedinta: "Cluj-Napoca",
	abilitati: ["HTML", "CSS", "Javascript", "Angular", "SQL"],
	experienta: 5,
	descriere: "Sunt o persoana dornica sa invete tehnologii noi.",
};

const persoana2 = {
	nume: "Anghel",
	prenume: "Gabriel",
	anulNasterii: 1997,
	resedinta: "Bucuresti",
	abilitati: ["HTML", "CSS"],
	experienta: 0,
	descriere: "Vreau sa ma angajez ca front-end developer",
};

const persoana3 = {
	nume: "Numeexemplu",
	prenume: "Prenumeexemplu",
	anulNasterii: 2002,
	resedinta: "Resedintaexemplu",
	abilitati: ["CSS", "HTML", "React"],
	experienta: 7,
	descriere: "Sunt un element de şir",
};

/* Declararea listei de persoane */
const listaMea = [persoana3, persoana1, persoana2];

/* Functia */
const persoaneFunction = function (lista) {
	return {
		listOutTheFullNames: function () {
			for (i = 0; i < lista.length; i++) {
				console.log(`${lista[i].nume},  ${lista[i].prenume}`);
				/* 				console.log(lista[i].nume + ", " + lista[i].prenume) */
			}
		},
		listOutTheEntireInformation: function () {
			for (i = 0; i < lista.length; i++) {
				console.log(`${lista[i].nume}, ${lista[i].prenume}, ${lista[i].anulNasterii}, ${lista[i].resedinta}, ${lista[i].abilitati}, ${lista[i].experienta}, ${lista[i].descriere}`);
			}
		},
		getPeopleByAlphabeticalOrder: function () {
			const sirSortatAlfabetic = lista.slice().sort((persoanaUnu, persoanaDoi) => {
				const numeCompletUnu = `${persoanaUnu.nume} ${persoanaUnu.prenume}`.toUpperCase();
				const numeCompletDoi = `${persoanaDoi.nume} ${persoanaDoi.prenume}`.toUpperCase();
				if (numeCompletUnu < numeCompletDoi) {
					return -1;
				}
				if (numeCompletUnu > numeCompletDoi) {
					return 1;
				}
				return 0;
			});
			return sirSortatAlfabetic;
		},
		getPeopleByYearsOfExperience: function () {
			const listaSeniori = [];
			for (i = 0; i < lista.length; i++) {
				if (lista[i].experienta >= 4) {
					listaSeniori.push(`${lista[i].nume} ${lista[i].prenume}`);
				}
			}
			return listaSeniori;
		},
	};
};

/* Rularea aplicatiei */
const listaPersoaneFunc = persoaneFunction(listaMea);
listaPersoaneFunc.listOutTheFullNames();
listaPersoaneFunc.listOutTheEntireInformation();
console.log(listaPersoaneFunc.getPeopleByAlphabeticalOrder());
console.log(listaPersoaneFunc.getPeopleByYearsOfExperience());
