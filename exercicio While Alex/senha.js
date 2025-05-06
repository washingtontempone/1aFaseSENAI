function senha(){

    let senha= "quemvemla"
    let tentativa = 1 
    let acertou = false
    while( tentativa <=3 && acertou === false){
        let senhatentativa = prompt("Digite sus senha: ")
        if(senha === senhatentativa){
            alert("Senha correta, usúario logado!")
            acertou = true
        }else{
            let tentativasobrando = 3 - tentativa
            alert("senha incorreta! Você tem mais: "+ tentativasobrando+ "tentativas")
        }
        tentativa ++
    }
    if(acertou === false) alert("Conta bloqueada!")
    else alert(" você esta dentro do sistema!")
}