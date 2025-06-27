 //Retornar a média dos números.

 const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];

 let numero = numeros.reduce((media, numeros) => media + numeros, 0)

 let somar= numero / numeros.length

 console.log(somar)