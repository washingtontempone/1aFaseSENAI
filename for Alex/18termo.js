// 2. Enquanto o usuário não aceitar os termos ou tiver menos de
//  18 anos, continue perguntando.

let usuário 
let idade 
let contador =1 
while(contador > 0){
  let usuário = prompt("Para aceitar o termo digite sim")
  // pra repitir pra digitar declara a varivel fora e traz para dentro do while.
  let idade = prompt ("Digite sua idade:")
   if (idade >=18 && usuário === "sim"){
    alert("Termo aceito")
    
 } else {
  alert ("Não foi aceito")}
  contador++
  }

  