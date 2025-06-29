// 1.Filtrar números maiores que 10.

const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

let numero = numeros.filter( numeros10=> numeros10 >10)
console.log (numero)

//2, Dobrar todos os números do array

//const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

let numero1 = numeros.map(numerox2 => numerox2 * 2)
console.log(numero1)

//3.Somar todos os números do array.

//const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

let numero3 = numeros.reduce((acumulador, objeto)=>{
    return acumulador + objeto
},0);
console.log(numero3)

//4. Encontrar o maior número.

//const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

let numero4 = numeros.reduce((maior, objeto )=> {
    return Math.max(maior, objeto)
})
console.log(numero4)

//5.Encontrar o menor número.

//const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

let numero5 = numeros.reduce((menor , objeto)=>{
    return Math.min(menor , objeto)
})
console.log(numero5)

 //6.Ordenar os números em ordem crescente.

 //const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

 let numero6 = numeros.sort((crescente, objeto) => crescente - objeto)

 console.log(numero6)

 //7.Criar um novo array com apenas os números ímpares.

 //const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

 let numero7 = numeros.filter(impar => impar %2 !=0)

 console.log(numero7)

 //8.Verificar se todos os números são maiores que 3

 //const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

 let numero8 = numeros.filter(maior => maior >3)
 console.log(numero8)

 //9. Verificar se existe algum número maior que 100

//const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

let numero9 = numeros.filter(maior => maior >100)
console.log(numero9)

//10.Retornar a média dos números.

 //const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

 let numero10 = numeros.reduce((media, numeros) => media + numeros, 0)

 let somar= numero10 / numeros.length

 console.log(somar)