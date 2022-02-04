/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const squadre = [
    {
        nome : "Roma",
        punti : 0,
        falli : 0
    },
    {
        nome : "Napoli",
        punti : 0,
        falli : 0
    },
    {
        nome : "Inter",
        punti : 0,
        falli : 0
    },
    {
        nome : "Juventus",
        punti : 0,
        falli : 0
    },
    {
        nome : "Milan",
        punti : 0,
        falli : 0
    }
];
//Dichiarazione della funzione numeri casuali
function numeriCasuali(min, max) {
    return Math.floor(Math.random() * (min - max + 1)) + min;
}

//Dichiarazione della funzione la quale mi assegna i dati mancanti
function datiMancanti(arraySquadre) {
    let squadreAggiornate = [];

    for (let i = 0; i < arraySquadre.length; i++) {
        arraySquadre[i].punti = numeriCasuali(0, 100);
        arraySquadre[i].falli = numeriCasuali(0, 50);

        const {nome, falli} = arraySquadre[i];
        squadreAggiornate.push({nome, falli});
    }
    
    console.log(arraySquadre);
    return squadreAggiornate;
    
}

console.log(datiMancanti(squadre));
