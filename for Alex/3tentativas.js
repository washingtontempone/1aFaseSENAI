// 1. Enquanto a senha digitada não for “abc123” e o número de tentativas 
// for menor que 3, peça a senha novamente.

let senha = "abc123"
contador = 1
acertou = false

while(contador <= 3 && acertou === false){
    let senhatentativa = prompt( "digite sua senha")

    if (senha === senhatentativa){
        alert("Senha correta miseravél!!!")
    Acertou = true
     } else {
        let tentativas = 3 - contador
        alert("Resta mais "+ tentativas+ "  tentativas")
     }
    
}contador++