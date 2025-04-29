// 15. Jogo do Número Secreto
// Descrição: Usuário tenta adivinhar um número 
// aleatório de 1 a 100.
// Entradas: Número digitado.
// Exemplo de Saída: “Tente novamente.”

// Math.ceil()-> arredonda pra cima 
// Math.floor()-> arredonda pra baixo 
// Math.round()-> arredonda pro mais proximo
function senha(){

    let numero= Number (prompt("digite seu numero?"))
    let min = Number(1)
    let max= Number(100)

    let numeroAleatorio=Math.floor(Math.random()*(max-min)+min)

if(numeroAleatorio===numero){
    alert("Numeros são iguais")

}else if(numeroAleatorio != numero){
    alert("Numero sâo diferentes")
}
}