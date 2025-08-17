// 1. Catálogo de Produtos
const catalogo = [
  { nome: "Camisa", preco: 29.9 },
  { nome: "Calça", preco: 59.9 },
  { nome: "Tênis", preco: 199.9 }
];
function buscarProduto(nome) {
  return catalogo.find(produto => produto.nome === nome);
}
console.log("Produto encontrado:", buscarProduto("Calça"));

// 2. Sistema de Biblioteca
const livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  emprestado: false,
  emprestar() { this.emprestado = true; },
  devolver() { this.emprestado = false; }
};
livro.emprestar();
console.log("Livro emprestado:", livro);

// 3. Conversor de Temperatura
const conversor = {
  celsiusParaFahrenheit(c) { return c * 1.8 + 32; },
  fahrenheitParaCelsius(f) { return (f - 32) / 1.8; }
};
console.log("20°C em Fahrenheit:", conversor.celsiusParaFahrenheit(20));

// 4. Agenda de Contatos
const agenda = {
  contatos: [],
  adicionar(nome, telefone) { this.contatos.push({ nome, telefone }); },
  remover(nome) { this.contatos = this.contatos.filter(c => c.nome !== nome); },
  listar() { return this.contatos; }
};
agenda.adicionar("Ana", "1234");
console.log("Agenda:", agenda.listar());

// 5. Relatório de Notas
const aluno = {
  nome: "João",
  notas: [7, 8, 9],
  media() {
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
  }
};
console.log("Média do aluno:", aluno.media());

// 6. Carrinho de Compras
const carrinho = {
  itens: [],
  adicionarItem(nome, qtd, preco) { this.itens.push({ nome, qtd, preco }); },
  removerItem(nome) { this.itens = this.itens.filter(i => i.nome !== nome); },
  total() {
    return this.itens.reduce((t, i) => t + i.qtd * i.preco, 0);
  }
};
carrinho.adicionarItem("Livro", 2, 25);
console.log("Total do carrinho:", carrinho.total());

// 7. Filtrar Alunos Aprovados
const alunos = [
  { nome: "Aline", media: 7 },
  { nome: "Bruno", media: 5 }
];
const aprovados = alunos.filter(a => a.media >= 6).map(a => a.nome);
console.log("Aprovados:", aprovados);

// 8. Conversor de Moedas
const moeda = {
  taxas: {
    USD: 5,
    EUR: 6
  },
  converter(valor, de, para) {
    return (valor / this.taxas[de]) * this.taxas[para];
  }
};
console.log("Conversão USD para EUR:", moeda.converter(10, "USD", "EUR"));

// 9. Banco com Múltiplas Contas
const banco = {
  contas: [
    { nome: "João", saldo: 1000, depositar(v) { this.saldo += v; }, sacar(v) { this.saldo -= v; } },
    { nome: "Maria", saldo: 2000, depositar(v) { this.saldo += v; }, sacar(v) { this.saldo -= v; } }
  ],
  saldoTotal() {
    return this.contas.reduce((s, c) => s + c.saldo, 0);
  }
};
console.log("Saldo total do banco:", banco.saldoTotal());

// 10. Sistema de Votação
const votos = {
  candidatos: {},
  votar(nome) { this.candidatos[nome] = (this.candidatos[nome] || 0) + 1; },
  maisVotado() {
    return Object.entries(this.candidatos).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  }
};
votos.votar("Ana");
votos.votar("Ana");
votos.votar("Bruno");
console.log("Mais votado:", votos.maisVotado());

// 11. Agenda Semanal
const agendaSemanal = {
  segunda: [],
  terca: [],
  adicionar(dia, tarefa) { this[dia].push(tarefa); },
  remover(dia, tarefa) { this[dia] = this[dia].filter(t => t !== tarefa); },
  listar(dia) { return this[dia]; }
};
agendaSemanal.adicionar("segunda", "Estudar");
console.log("Compromissos segunda:", agendaSemanal.listar("segunda"));

// 12. Gerador de Fichas de RPG
function criarPersonagem(nome) {
  return {
    nome,
    forca: Math.ceil(Math.random() * 10),
    destreza: Math.ceil(Math.random() * 10),
    vida: Math.ceil(Math.random() * 100)
  };
}
const personagens = [criarPersonagem("Guerreiro"), criarPersonagem("Mago")];
console.log("Personagens:", personagens);

// 13. Validador de Formulário
function validar(dados) {
  const erros = {};
  if (!dados.nome) erros.nome = "Nome obrigatório";
  if (!dados.email.includes("@")) erros.email = "Email inválido";
  if (dados.idade < 18) erros.idade = "Menor de idade";
  return Object.keys(erros).length ? erros : { sucesso: true };
}
console.log("Validação:", validar({ nome: "", email: "teste", idade: 15 }));

// 14. Sistema de Gestão de Projetos
const projeto = {
  nome: "Site",
  status: "em andamento",
  tarefas: [
    { nome: "HTML", data: "2024-01-01", status: "feito" },
    { nome: "CSS", data: "2024-01-02", status: "pendente" }
  ],
  listarPorStatus(s) {
    return this.tarefas.filter(t => t.status === s);
  }
};
console.log("Tarefas pendentes:", projeto.listarPorStatus("pendente"));

// 15. Simulador de Jogo de Dados
const jogoDeDados = {
  historico: [],
  rolar() {
    const d1 = Math.ceil(Math.random() * 6);
    const d2 = Math.ceil(Math.random() * 6);
    this.historico.push([d1, d2]);
    return [d1, d2];
  },
  contar(numero) {
    return this.historico.flat().filter(n => n === numero).length;
  }
};
console.log("Rolagem de dados:", jogoDeDados.rolar());
console.log("Quantidade de 6:", jogoDeDados.contar(6));
