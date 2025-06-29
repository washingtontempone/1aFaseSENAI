//Agrupar os produtos por categoria (bônus - mais avançado).

const produtos = [
  { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
  { nome: "Meias", preco: 9.9, categoria: "Roupas" },
  { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

const agrupados = produtos.reduce((acumulador, produto) => {
  const categoria = produto.categoria;
  if (!acumulador[categoria]) {
    acumulador[categoria] = [];
  }
  acumulador[categoria].push(produto);
  return acumulador;
}, {}); 

console.log(agrupados);
