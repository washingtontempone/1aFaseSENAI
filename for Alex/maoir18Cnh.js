//1. Peça ao usuário sua idade e se ele tem carteira de motorista. 
// Exiba "Pode
//dirigir" se for maior de 18 e tiver carteira.

let idade = 0 
let cnh = 'nao'
for(let cont = 1; idade < 18 || cnh !== 'sim'; cont++){
    idade = prompt(" Digite sua idade: ") 
    cnh = prompt("tem cnh: ")
    if(idade >= 18 && cnh === 'sim'){
         alert("Pode dirigir: ")
    }
    else alert("Nao pode dirigir")

    alert(cont)
}
// let idade =prompt("Digite sua idade?")
// let cnh = confirm("Tem cnh")

// if(idade >= 18 && cnh == true){
//     alert("Pode dirigir:")

// }else alert("Não pode dirigir")