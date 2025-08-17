// 1. Filtro e transformação com ordenação (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras
// maiúsculas e ordenadas.

const palavras = ["desenvolvimento","web","javascrit", "logica", "frontend" ]

const resultado = palavras
  .filter(palavra => palavra.length > 7)         
  .map(palavra => palavra.toUpperCase())         
  .sort()

//2. Média dos alunos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● Crie um array com objetos contendo nome e notas. Retorne a um novo array com nome e a média

const alunos =[
    { nome: "ana" , notas:[8,9,10]},
    { nome: "Carlos" , notas:[8,9,10]}
]
const medias = alunos.map(aluno => {
  const soma = aluno.notas.reduce((total, nota) => total + nota, 0)
  return { nome: aluno.nome, media: soma }
})

//3. Cálculo de estoque (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● A partir do array abaixo, calcule o saldo final do estoque:

const transacoes =[
    {tipo: "entrada", valor: 100},
    {tipo: "saida", valor: 60},
    {tipo: "entrada", valor: 50},
    {tipo: "saida", valor: 30} 
]
 const saldoFinal = transacoes.reduce((saldo, transacao) => {
  if (transacao.tipo === "entrada") {
    return saldo + transacao.valor
  } else if (transacao.tipo === "saida") {
    return saldo - transacao.valor
  }
  return saldo
}, 0)
console.log(saldoFinal)

// 4. Aplicar desconto em produtos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que aplica 10% de desconto em produtos com valor > R$100.

const produtos = [
    {nome: "cadeira", valor: 150}, 
    {nome: "lapis", valor: 5}
]

 let desconto = produtos.reduce( descontoTotal=> descontoTotal.valor > 100, descontoTotal *0.9)

 console.log(desconto)

// 5. Verificações de dados (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Verifique se algum usuário está logado e se todos estão logados:

const usuarios = [
    {nome: "ana", logado: true},
    {nome: "lucas", logado: false},
    {nome: "beatriz", logado: true}
]
let usuarioLogado = usuarios.filter(logados => logados.logado === true) 

 console.log(usuarioLogado)  

//  6. Função buscar produto (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que busca um produto pelo nome:

const produtos1 = [
    {nome: "notbook", preco:3000},
    {nome: "mouse", preco:50}
]
let produtoNome = produtos1.filter(nomes => nomes.nome ,0)

 console.log(produtoNome)

//  7. Listar tarefas pendentes (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Filtre as tarefas não concluídas e liste com prefixo "Pendente: ...":

const tarefas = [
    { descrição: "estudar js", concluida: true},
    { descrição: "fazer prova", concluida: false},
    { descrição: "enviar projeto", concluida: false}
]
let tarefasPedentes =tarefas.map(prefixo =>
     prefixo.concluida || prefixo.descrição  )

console.log(tarefasPedentes)
