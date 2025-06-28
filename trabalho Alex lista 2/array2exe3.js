//A partir de  nomes, retorne o nome com maior quantidade de letras

const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

let maiores = nomes.reduce((maior, atual ) => {
return atual.length > maior.length? atual : maior
})
console.log(maiores)

//errou tem que corrigir