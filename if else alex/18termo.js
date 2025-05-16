// 10. Verifique se uma pessoa não é maior de idade ou não aceitou os 
// termos. Se for verdade, exiba "Acesso negado".

let idade = Number(prompt("Digite sua idade:"))
let termos = prompt("Aceita o termo sim ou não: ")

if( idade <=18 || termos !== "sim"){
   alert("Acesso negado")
}else{
    alert("Acesso permitido")
}