
const numeros =[ 5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }];

  //1. Crie um array apenas com os quadrados dos números pares

 let numero = numeros.filter(num => num % 2 === 0)
 let numeroQuadrado = numero.map(numero => numero ** 2)
 console.log(numeroQuadrado)

 //2. Nome com maior quantidade de letras

 let nome = nomes.reduce((maior , atual ) => 
    maior.length > atual.length ? maior : atual )
 console.log(nome)

 //3. Verifique se todos os nomes terminam com uma vogal

const vogais = ['a', 'e', 'i', 'o', 'u']
const todosTerminamComVogal = nomes.every(nome => {
  const ultimaLetra = nome[nome.length - 1].toLowerCase()
  return vogais.includes(ultimaLetra)
})
console.log(todosTerminamComVogal)

//4. Junte os arrays numeros e nomes em um único array

let nomeJuntos = [...numeros, ...nomes]
console.log(nomeJuntos)

//5.Nomes dos produtos que custam menos de R$100 e são da categoria "Roupas"

const produto = produtos
  .filter(p => p.preco < 100 && p.categoria === "Roupas")
  .map(p => p.nome);
console.log(produto)

// 6. Função que calcula o valor médio dos produtos da categoria “Eletrônicos”

function mediaEletronicos(produtos) {
  const eletronicos = produtos.filter(p => p.categoria === "Eletrônicos")
  const total = eletronicos.reduce((soma, p) => soma + p.preco, 0)
  return eletronicos.length > 0 ? total / eletronicos.length : 0
}
console.log(mediaEletronicos(produtos))



