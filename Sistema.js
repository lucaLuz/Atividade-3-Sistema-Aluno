let numeroDeAlunos = 10;

let contador = 0;

while(contador<=numeroDeAlunos){
   
    if (contador==0){
        console.log("O número atual e zero!")
    }else if (contador % 2==0){
        console.log("Este número "+contador+ " e par")
    } else{
 console.log(`Este número ${contador} e impar`)}
     contador++;
 }

// for (let contador = 0; contador <= numeroDeAlunos; contador++) {
   
//    if (contador==0){
//        console.log("O número atual e zero!")
//    }else if (contador % 2==0){
//        console.log("Este número "+contador+ " e par")
//    } else{
// console.log(`Este número ${contador} e impar`)}
// }