//Somar todos os números do array.

const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

let numero = numeros.reduce((acumulador, objeto)=>{
    return acumulador + objeto
},0);
console.log(numero)