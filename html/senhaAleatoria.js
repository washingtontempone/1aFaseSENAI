// 18. Gerador de Senhas Aleatórias
// Descrição: Cria senhas com letras, números e 
// símbolos.
// Entradas: Comprimento desejado.
// Exemplo de Saída: “Senha gerada: aX$7v!2d”
// Math.ceil()-> arredonda pra cima 
// Math.floor()-> arredonda pra baixo 
// Math.round()-> arredonda pro mais proximo

function gerarCaracterAleatorio() {

    const carateres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 "
    const numeroAleatorio = Math.floor(Math.random() * carateres.length);
    return caracteres.charAt(numeroAleatorio);

}
function mostra() {
    let quantidade = Number(prompt("informre quantos caracteres sua senha tem"))

    if (quantidade == 1) {
        alert("senha:" + gerarCaracterAleatorio())
    } else if (quantidade == 2) {
        alert("senha:" + gerarCaracterAleatorio()
            + gerarCaracterAleatorio())
    } else if (quantidade == 3) {
        alert("senha"
            + gerarCaracterAleatorio()
            + gerarCaracterAleatorio()
            + gerarCaracterAleatorio())
    } else if (quantidade == 4) {
        alert("senha"
            + gerarCaracterAleatorio()
            + gerarCaracterAleatorio()
            + gerarCaracterAleatorio()
            + gerarCaracterAleatorio()
        )
    }else if (quantidade == 5) {
        alert("senha"
            + gerarCaracterAleatorio()
            + gerarCaracterAleatorio()
            + gerarCaracterAleatorio()
            + gerarCaracterAleatorio()
            + gerarCaracterAleatorio()
        )
    }
}