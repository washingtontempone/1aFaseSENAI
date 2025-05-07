/*Você entrou em um jogo de presente secreto. Se você tirou "Carlos", 
você deve comprar um livro. Se tirou "Ana", um chocolate. 
Qualquer outro nome, um presente surpresa!
Desafio:
let nomeSorteado;
Resultado esperado:
"Compre um livro 📚"
"Compre um chocolate 🍫"
"Compre um presente surpresa 🎁"*/

let presente = prompt(`  Qual presente devo comprar?
   1- Ana
   2- carlos
   Se não for nenhum dos dois digite qualquer numero! `)

   if (presente==1){
    console.log("Compre um chocolate 🍫")
   }
   if (presente==2){
    console.log("Compre um livro 📚")
   }if (presente>2){
    console.log("Compre um presente surpresa 🎁")
   }
