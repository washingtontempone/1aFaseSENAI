function exercicio3lista2(){
    let nome= prompt("Digite o nome do super heroi")
    let min = 1
    let max= 4

    let numeroAleatorio = Math.floor(Math.random()*(max-min)+min)

    // Math.ceil()-> arredonda pra cima 
    // Math.floor()-> arredonda pra baixo 
    // Math.round()-> arredonda pro mais proximo

let frase1= "  Batmam"
let frase2= "  Chapolim colorado"
let frase3= "  Homem cueca"

if(numeroAleatorio===1){
    alert(nome +  frase1)
}else if(numeroAleatorio===2){
    alert(nome +  frase2)
}else if(numeroAleatorio===3){
    alert(nome +  frase3)
}
}