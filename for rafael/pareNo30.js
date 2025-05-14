// 8. Conte os números de 1 a 50, mas pare se chegar a 30.


let soma = 0 
for (contador = 1; contador <= 50 && soma + contador <= 30; contador++){
     //let soma = 0 
     soma = contador + soma
     //if(soma = contador+soma  && soma ===3)
      //alert("chegou no 30 parou")

      alert("contador:" + contador+ " Ate 30 : " +soma)
}  