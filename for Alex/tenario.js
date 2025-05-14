//1. Peça ao usuário sua idade e se ele tem carteira de motorista. 
// Exiba "Pode
//dirigir" se for maior de 18 e tiver carteira.

let idade =0
let cnh = false
while (idade < 18 || !cnh){
    idade = Number(prompt("Digite sua idade:  "))
    cnh = prompt("Tem cnh? sim ou não ") == "sim"? true : false
    if(idade >= 18 && chn) alert("Voçê pode dirigir")
        else alert("Ainda não pode dirigir")
}