 //Conte até 30 e diga “Pulando!” para múltiplos de 7
 //let soma = 0
for (cont= 1 ; cont <= 30 ; cont ++){
    let soma = 0 
    soma = cont + soma 
     
    if(soma % 7===0){
        alert("contador: " + soma + "  Pula")

    }else{
        alert("contador:  "+ cont)
    }
}

