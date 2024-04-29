var numeri = [9, 5, 3, 1];

//console.log(numeri[0]);
//console.log(numeri[2]);
/*
for (var i = 0; i < numeri.length; i++){
    console.log(numeri[i]);
}*/
// la prorietà length ritorna la lunghezza dell'array
console.log(numeri.length);
// la proprietà push
numeri.push(7);
// la proprietà ha due parametri, il primo è l'indice dell'elemento che vogliamo eliminare, il secondo è il numero degli elementi che vogliamo eliminare a partire da quell'elemento
numeri.splice(3);
//for (var i = 0; i < numeri.length; i++){
  //  console.log(numeri[i]); }

for (var i = 0; i < numeri.length; i++){
   {
        console.log(numeri[i]);
    }
}
// metodo sort per ordinare gli elemeenti all'interno dell'array
numeri.sort();

for (var i = 0; i < numeri.length; i++){
   {
        console.log(numeri[i]);
    }
}
