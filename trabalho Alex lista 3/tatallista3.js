//1.Filtrar os produtos da categoria “Eletrônicosˮ

const produtos = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }];

  let produto = produtos.filter(produtoEletronico => produtoEletronico.categoria === "Eletrônicos")

  console.log(produto)

  //2.Criar um array apenas com os nomes dos produtos

// const produtos = [
//   { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
//   { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
//   { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
//   { nome: "Meias", preco: 9.9, categoria: "Roupas" },
//   { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }];

  let produto2 = produtos.map(categoria => categoria.nome)

  console.log(produto2)

  //3.Criar um array com os preços com desconto de 10%

  let produto3 = produtos.map(categoria => categoria.preco *0.9)
  console.log (produto3)

  //4.Calcular o valor total de todos os produtos

  let produto4 = produtos.reduce((soma,total) => soma + total.preco, 0)
  console.log (produto4)

  //5.Encontrar o produto mais caro

  let produto5 = produtos.reduce((maior,numero )=> maior.preco > numero.preco ? maior : numero)

  console.log(produto5)

  //6.Ordenar os produtos do mais barato ao mais caro

  let produto6 = produtos.sort((maior,menor) => maior.preco - menor.preco)
  console.log(produto6)

  //7.Agrupar os produtos por categoria (bônus - mais avançado).

const agrupados = produtos.reduce((acumulador, produto) => {
  const categoria = produto.categoria
  if (!acumulador[categoria]) {
    acumulador[categoria] = []
  }
  acumulador[categoria].push(produto)
  return acumulador;
}, {})

console.log(agrupados)

//8.Criar uma função que receba uma categoria e retorne os produtos dela

function filtrarPorCategoria(categoria) {
  return produtos.filter(produto => produto.categoria === categoria)
}

const eletronicos = filtrarPorCategoria("Eletrônicos")
console.log(eletronicos)

//9.Criar um array com objetos apenas contendo nome e preço.

const produtosSimples = produtos.map(produto => {
  return { nome: produto.nome, preco: produto.preco }
})
console.log(produtosSimples)

//10.Verificar se todos os produtos custam mais de R$ 5

let produto10 = produtos.reduce(maoirCinco => maoirCinco.preco > 5)
console.log(produto10)
