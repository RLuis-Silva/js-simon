$(document).ready(function(){


    //Todo 1- Un alert espone 5 numeri casuali diversi.
    //Todo 2 - Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    //Todo 3 - Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


    // Var 
    var randomNumber = $('#numRandom');
    var collectionNumbers = [];
    var minNumber = 1;
    var maxNumber = 100;
    var secondi = 30;
    var playerNumber;
    var score = [];

    // Creazione numeri random da parte del computer

    for ( i = 0; i < 5; i++){
       var selectNumber = Math.floor(Math.random () *( maxNumber - minNumber + 1)) + minNumber;
       //check number già non presente
       while (collectionNumbers.includes(selectNumber)){
           var selectNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
       }
        collectionNumbers.push(selectNumber);
    };
    console.log(collectionNumbers); //?debug

    // Mostra i numeri su schermo per 30 secondi

    
    var timer = setInterval(function(){
        if (secondi == 0){
            randomNumber.hide();
            clearInterval(timer);

        } else {
            randomNumber.text(collectionNumbers);
            console.log(secondi); //? check secondi debug
            secondi --;
        }

    },1000);

    // Chiedi al giocatore di inserire per 5 volte un numero

    setTimeout (gamestart, secondi*1200);

    function gamestart () {
        for (i = 0; i < 5; i++){
            playerNumber = parseInt( prompt('Adesso tocca a te! \nInserisci un numero'));
    
            //Check se il numero inserito è compreso nei numeri generati dal computer 
    
            if (collectionNumbers.includes(playerNumber)){   
                score.push(playerNumber);
            }
        } 
        // Il software dice quali sono i numeri che sono stati indovinati
        console.log('i numeri corretti da te inseriti sono ', score);
        console.log('Hai indovinato nua quantità di numeri pari a ', score.length);
        $('#risultatoNumLista').text('Ecco i numeri che hai indovinato! ' + score);
        $('#risultatoPunteggio').text('Il totale dei numeri corretti che hai indovinato è ' + score.length);
    }

}); // <--- end doc ready