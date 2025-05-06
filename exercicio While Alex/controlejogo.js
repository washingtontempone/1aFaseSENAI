/*O botão A faz pular, o botão B faz correr. Qual o usário digitou?
let botaoPressionado;
Exiba ações com if/else .*/

alert('Aperte o botão!')

let botaoPressionado = prompt(`Qual botão deseja aperta?
      A- pula
      B- corre`)

    if (botaoPressionado == a ){
        console.log("faz pular")
    }else if(botaoPressionado == b){
        console.log('Faz correr')
    }else{
        console.log('Este botão não existe')
    }
