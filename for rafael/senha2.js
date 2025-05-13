//logim ate nome "admim" e senha "1234" corretos.

let usuario = "admin"
let senha = "1234"
usuarioDigitado= ''
senhaDigitada = ''
let tentativas = 1
while((usuario !== usuarioDigitado || senha !== senhaDigitada)|| temtativas <= 3){
    usuarioDigitado = prompt ("digite seu usuário")
    senhaDigitada = prompt ("Digite sua senha")
    tentativas++
}
if(senhaDigitada == semha && usuario == usuarioDigitado){
alert("Você esta logado")
}else alert( "Senha bloqueada")