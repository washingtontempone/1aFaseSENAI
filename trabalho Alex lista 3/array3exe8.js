//Criar uma função que receba uma categoria e retorne os produtos dela

const produtos = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

function filtrarPorCategoria(categoria) {
  return produtos.filter(produto => produto.categoria === categoria)
}

const eletronicos = filtrarPorCategoria("Eletrônicos")
console.log(eletronicos)