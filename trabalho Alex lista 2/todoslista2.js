//1.Ordenar os nomes em ordem alfabética

const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

let ordem = nomes.sort()

console.log(ordem)
//2.Filtrar os nomes com mais de 5 letras.

const nomes2 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

let cinco =nomes.filter(nome => nome.length >5)

console.log(cinco)

//3.A partir de  nomes, retorne o nome com maior quantidade de letras

const nomes3 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

let maiores = nomes.reduce((maior, atual ) => {
return atual.length > maior.length? atual : maior
})
console.log(maiores)

//4.Verificar se algum nome começa com a letra “Bˮ

  const nomes4 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarconstda", "Bruno"];

 let nome1 = nomes.filter(nomes => letraB.startswith("B"))

 console.log(nome1)

 //5.Encontrar o nome “Danielˮ no array

const nomes5 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

let nomeD = nomes.filter(nome=> nome === "Daniel")

console.log(nomeD)

//6. Criar um array com a quantidade de letras de cada nome

const nomes6 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarconstda", "Bruno"];

let nome2 = nomes.map (nome => nome.length)
console.log(nome2)

//7.untar todos os nomes em uma string separada por vírgula.

const nomes7 = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

let nome = nomes.join (",")
console.log(nome)
