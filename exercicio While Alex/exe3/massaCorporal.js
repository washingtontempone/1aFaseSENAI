// Solicite ao usuário que insira seu peso e altura.
// Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = 
// peso / (altura²).
// Lista de exercícios HTML-JS 1
// Exiba o resultado em um alert e classifique o IMC de acordo com os
// valores:
// Menos de 18,5: Abaixo do peso
// Entre 18,5 e 24,9: Peso normal
// Entre 25 e 29,9: Sobrepeso
// 30 ou mais: Obesidade

function massaCorporal(){
    alert ("Vamos medir sua massa corporal.")
    let peso = Number( prompt("Qual é seu peso? "))
    let altura= Number(prompt("Qual é sua altura?"))
    let resultado= peso  /(altura*altura)

    if(resultado <=18.5){
       alert("Abaixo do peso.")
    }
     else if(resultado >18.5  <24.9){
       alert("Peso normal.")
    }
    else  if(resultado >25 <29.9){
      alert("Acima do peso.")
    }  
    else if(resultado>30){ 
        alert("Obesidade.")
    }
    

}