/*Para preparar uma poção, o bruxo precisa misturar exatamente dois 
ingredientes certos.
Desafio:
let ingrediente1 = "pele de sapo";
let ingrediente2 = "asa de morcego";
Verifique se os ingredientes são exatamente esses. Se forem, 
diga "Poção pronta!", senão "Mistura errada!"*/

let ingrediente = Number(prompt(`Vamos preparar uma proção? 
           1- Pele de sapo
           2- Asa de morcego`))

    if(ingrediente == 1){
        console.log('Poção pronta!!!!')
    } else if (ingrediente ==2 ){
        console.log('Poção pronta!!!!')
    }else{
        console.log("Mistura errada!")
    }