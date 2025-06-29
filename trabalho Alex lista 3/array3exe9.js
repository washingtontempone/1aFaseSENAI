//Criar um array com objetos apenas contendo nome e preço.

const produtos = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];
const produtosSimples = produtos.map(produto => {
  return { nome: produto.nome, preco: produto.preco }
})

console.log(produtosSimples)