//Ordenar os produtos do mais barato ao mais caro

const produtos = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }];

  let produto = produtos.sort((maior,menor) => maior.preco - menor.preco)
  console.log(produto)