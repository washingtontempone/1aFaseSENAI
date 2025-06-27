// Encontrar o maior número.

const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

let numero = numeros.reduce((maior, objeto )=> {
    return Math.max(maior, objeto)
})
console.log(numero)