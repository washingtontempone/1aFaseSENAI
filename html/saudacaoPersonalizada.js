// Solicite ao usuário que digite seu nome usando prompt .
// Exiba uma saudação personalizada no formato: "Olá, [nome]!
//  Seja bemvindo!" usando alert .

function nome(){

let nome = prompt("Pode digitar seu nome")

if(nome == "washington"){
    alert("Bem vindo: "+nome)
}else if(nome !== "washington"){
    alert("Não sabe seu  nome?")
}
}