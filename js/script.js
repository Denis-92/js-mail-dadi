console.log('JS - OK!');

//Due dadi da 1 a 6

// numero random si fa Math.random()
// genera un numero casuale con intervallo 0 >= x > 1

// Math.floor per arrotondare in numero intero per difetto


Math.floor(Math.random() * 6 + 1);

// Confronto dei due dadi (uno per l'utente e uno per l'avversario bot)

const dadoUtente = Math.floor(Math.random() * 6 + 1);

const dadoBot = Math.floor(Math.random() * 6 + 1);

if (dadoBot > dadoUtente) {
    console.log('Vince il bbot');
}
if (dadoUtente > dadoBot) {
    console.log('Vince il giocatore');
}
if (dadoBot === dadoUtente) {
    console.log('Pareggio');
}