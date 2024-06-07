const myBtn = document.querySelector("button");
//Creazione array con invitati
const invitati = ['samuele@mail.com', 'giulia@mail.com', 'luca@mail.com', 'martina@mail.com', 'alessandro@mail.com', 'elena@mail.com', 'francesco@mail.com', 'sara@mail.com', 'matteo@mail.com', 'chiara@mail.com'];

console.log("Gli invitati alla festa sono",invitati.length);

//Chiedi all’utente la sua email 
myBtn.addEventListener("click",
    function() {
        const mailInput = document.querySelector("input");
        mailInputValue = mailInput.value;
        console.log(mailInputValue);

        //controlla che sia nella lista di chi può accedere
        for (let i = 0; i < invitati.length; i++) {
            let InvitatoIesimo = invitati[i];
            if(mailInputValue === InvitatoIesimo) {
                document.getElementById("checkMessage").innerHTML = "Sei stato invitato";
            }else {
                document.getElementById("checkMessage").innerHTML = "Non sei stato invitato";
            }
        }
    }
)






//stampa un messaggio appropriato sull’esito del controllo.
