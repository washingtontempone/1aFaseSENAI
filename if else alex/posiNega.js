// 4. Peça dois números. Exiba "Valores válidos" se um for positivo e o outro 
// for negativo.

let numero1 = Number(prompt("Digite primeiro número"))
let numero2 = Number(prompt("Digite segundo número"))
let positivo = numero1 >= 0 && numero2 >= 0
let negativo = numero1 < 0 && numero2 < 0


if(positivo){
    alert( "Primeiro número é postivo:  " +" " + positivo ) 
    alert( "Primeiro número é postivo:  " +"" + positivo ) 
}else{
    alert( "Segundo  número é negativo:  " +" " + negativo)
    alert( "Segundo número é negativo:  " +"" + negativo ) 
}

 

//if (positivo = numero1 % 2 ===0 && numero2 % 2 ===0)
        
    //alert( "Numero é postivo:  "+ positivo )
//else if(negativo)

    //alert( "Numero1 é negativo:  " +"" + numero1 + negativo  + "  Numero2 é postivo:  " +" " + numero2 + positivo)
//(negativo = numero2 % 2 !==0 && numero2 % 2 !==0)
