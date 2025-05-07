/*Você é um astronauta tentando pousar no Planeta JavaScript.
 A nave só pousa se o combustível for maior que 50 **e**o clima
  for "bom".
let combustivel;
let clima;
Exiba:
- "Pouso autorizado!" ou
- "Abortar missão!"*/

let pouso1 = prompt(`  Querem pousar?
    1_ se tiver 50% de combustivél 
    2_ Nâo temos`)
let pouso2 = prompt(`  segunda condição, tempo está bom?
    1_ sim
    2_ Nâo `)
    

if (pouso1==1 && pouso2==3) {
    console.log("Pouso autorizado")
 }if(pouso1!=1 && pouso2!=3) {
    console.log("Abortar missâo")
 }