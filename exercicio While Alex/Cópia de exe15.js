/*Você precisa preparar um prato especial se o ingrediente principal 
**ou** o tempero secreto estiver disponível.
let temIngredientePrincipal;
let temTemperoSecreto;
Exiba:
- "Prato especial pronto! 🍽️" ou
- "Sem os ingredientes necessários. 😕"*/

alert (' Qual prato que eu prepare !!!!')
let prato = prompt(`1- Ingrediente principal
     2- Tempero secreto estiver disponível `)

     if(prato=1){
        console.log('Sem os ingredientes necessários. 😕')
     }else if(prato=2){
        console.log('Prato especial pronto! 🍽️')
     }