//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const myBtn = document.querySelector("button");



//Evento click
myBtn.addEventListener("click",
    function() {
        const myNumber = Math.floor(Math.random() * 6) + 1;
        const botNumber = Math.floor(Math.random() * 6) + 1;

        console.log("Il tuo numero è",myNumber,"Il numero del pc è",botNumber);

        //Stampa userDice
        const diceElement = document.getElementById("userDice");
        let userDice = `<span>Your Dice<br><img src="img/${myNumber}.svg"></span>`;
        diceElement.innerHTML = userDice;

        //Stampa botDice
        const botdiceElement = document.getElementById("botDice");
        let botDice = `<span>Bot Dice<br><img src="img/${botNumber}.svg"></span>`;
        botdiceElement.innerHTML = botDice;

        //Selezione vincitore
        if(myNumber > botNumber) {
            message = "HAI VINTO!";
        } else if (myNumber < botNumber) {
            message = "HAI PERSO!";
        } else {
            message = "PAREGGIO";
        }

        document.getElementById("winner").innerHTML = message;
    }
)