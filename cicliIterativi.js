var stringa = "Carlo";

var stringa1 = prompt("Inserisci il tuo nome: ");

if (stringa == stringa1){
    console.log("I nomi sono uguali");
}
else console.log("I nomi sono diversi");

console.log("Il tuo nome " + stringa + " benvenuto")
var num = 1;



while (num <= 10){
    console.log(num*8);
    // operatore di incremento ad ogni iterazione aumenta di uno
    num++;
}
var num1 = 11;
do {
    console.log(num1*7);
    num1++;
}
while (num1 <= 10)
do {
    var x = parseInt(prompt("Inserisci un numero: "));
}
while (x < 10)
