
let senha= 1234

for(let tentavivas = 1; tentavivas <= 3 && senhadigitada !== senha; tentavivas ++){
    senhadigitada = prompt("Digite sua senha")
}
if(senhadigitada !== senha){
    alert("conta bloqueada")
}else{
    alert("logado!")
}