//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const myBtn = document.querySelector("button");

//Evento click
myBtn.addEventListener("click",
    function() {
        const myNumber = Math.floor(Math.random() * 6) + 1;
        const botNumber = Math.floor(Math.random() * 6) + 1;

        console.log("Il tuo numero è",myNumber,"Il numero del pc è",botNumber);
    }
)