// 9. Peça a altura e o peso. Exiba "Apto para o esporte" se altura > 
// 1.60m e peso entre 50 e 90 kg.

let peso = Number( prompt( "Digite seu peso: "))
let altura = Number( prompt( "Digite sua altura: "))
// peso >= 50 <= 90 
// altura > 1.60

if( peso >= 50 <= 90   && altura > 1.60){
    alert("Apto para esporte!!!")
}else{
    alert("Não está apto para esporte")
}

