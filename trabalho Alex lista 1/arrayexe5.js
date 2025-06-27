//Encontrar o menor número.

const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

let numero = numeros.reduce((menor , objeto)=>{
    return Math.min(menor , objeto)
})
console.log(numero)