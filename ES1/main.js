//Dato un array con le informazioni di N bici stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [  
    {
        modello: 'Rockrider E-ST 100',
        peso: 14,
    },
    {
        modello: 'BTWIN Tilt 500E',
        peso: 13,
    },
    {
        modello: 'VivoBike Milano',
        peso: 12,
    },
    {
        modello: 'Riverside 540 E',
        peso: 11,
    },
    {
        modello: 'Triban RC120',
        peso: 10,
    }
];

//Dichiarazione delle funzione
function calcolaPeso (array) {
    //Salvo il peso e il nome della prima bici
    let {peso, modello} = array[0];

    //Ciclo FOR per scorrere l'array
    for (let i = 0; i < array.length; i++) {
        //Controllo se il peso nella posizione i è maggione del peso iniziale salvato
        if (peso > array[i].peso) {

            peso = array[i].peso;
            modello = array[i].modello;

        }
    }
    
    //Restituisco il risultato
    return console.log(`La bicicletta con il peso minore è ${modello} con un peso di ${peso}`);
}

//Richiamo funzione
calcolaPeso(bici);