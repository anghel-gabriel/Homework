/* Declararea persoanelor */
const persoana1 = {
	nume: 'Duhanes',
	prenume: 'Andrei',
	anulNasterii: 1990,
	resedinta: 'Cluj-Napoca',
	abilitati: ['HTML', 'CSS', 'Javascript', 'Angular', 'SQL'],
	experienta: 5,
	descriere: 'Sunt o persoana dornica sa invete tehnologii noi.',
};

const persoana2 = {
	nume: 'Anghel',
	prenume: 'Gabriel',
	anulNasterii: 1997,
	resedinta: 'Bucuresti',
	abilitati: ['HTML', 'CSS'],
	experienta: 0,
	descriere: 'Vreau sa ma angajez ca front-end developer',
};

const persoana3 = {
	nume: 'Numeexemplu',
	prenume: 'Prenumeexemplu',
	anulNasterii: 2002,
	resedinta: 'Resedintaexemplu',
	abilitati: ['React', 'Angular', 'Node'],
	experienta: 7,
	descriere: 'Sunt un element de şir',
};

/* Declararea listei de persoane */
const listaMea = [persoana3, persoana1, persoana2];

/* Functia */
const persoaneFunction = function (lista) {
	return {
		listOutTheFullNames: function () {
			for (let i = 0; i < lista.length; i++) {
				console.log(`${lista[i].nume},  ${lista[i].prenume}`);
				/* 				console.log(lista[i].nume + ", " + lista[i].prenume) */
			}
		},
		listOutTheEntireInformation: function () {
			for (let i = 0; i < lista.length; i++) {
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
			for (let i = 0; i < lista.length; i++) {
				if (lista[i].experienta >= 4) {
					listaSeniori.push(`${lista[i].nume} ${lista[i].prenume}`);
				}
			}
			return listaSeniori;
		},
		getPeopleByExactSkillsSet: function (skillsArr) {
			let peopleWithNecessarySkills = [];
			for (let i = 0; i < lista.length; i++) {
				if (lista[i].abilitati.includes(...skillsArr)) {
					peopleWithNecessarySkills.push(lista[i]);
				}
			}
			return peopleWithNecessarySkills;
		},
		getPeopleBySomeSkillSet: function (skillsArr) {
			console.log(skillsArr);
			let peopleWithSomeSkills = [];
			for (let i = 0; i < lista.length; i++) {
				for (let j = 0; j < skillsArr.length; j++) {
					if (lista[i].abilitati.includes(skillsArr[j]) && !peopleWithSomeSkills.includes(lista[i])) {
						peopleWithSomeSkills.push(lista[i]);
					}
				}
			}
			return peopleWithSomeSkills;
		},
		getHtmlContent: function () {
			listaMea.map((persoanaObj) => {
				document.querySelector('body').innerHTML += `
    			<div style="margin-top: 60px">
						<h1>Nume complet: ${persoanaObj.nume} ${persoanaObj.prenume}</h1>
						<h2>Anul naşterii: ${persoanaObj.anulNasterii}</h2>
						<h3>Reşedinţă: ${persoanaObj.resedinta}</h3>
						<h4>Abilităţi: ${persoanaObj.abilitati}</h4>
						<h5>Experienţă: ${persoanaObj.experienta} ani</h5>
						<p> Descriere: "${persoanaObj.descriere}"</p>
   				</div>`;
			});
		},
	};
};

/* Rularea aplicatiei */
const listaPersoaneFunc = persoaneFunction(listaMea);
listaPersoaneFunc.listOutTheFullNames();
listaPersoaneFunc.listOutTheEntireInformation();
console.log('Persoane ordine alfabetica', listaPersoaneFunc.getPeopleByAlphabeticalOrder());
console.log('Programatori seniori', listaPersoaneFunc.getPeopleByYearsOfExperience());
console.log('Persoane cu exact abilitati', listaPersoaneFunc.getPeopleByExactSkillsSet(['HTML', 'CSS']));
console.log('Persoane cu una dintre abilitati', listaPersoaneFunc.getPeopleByExactSkillsSet(['React', 'Angular', 'CSS']));
listaPersoaneFunc.getHtmlContent();
