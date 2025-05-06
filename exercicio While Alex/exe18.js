/*Se a criança for do ensino fundamental, precisa levar lápis. 
Se for do médio, leva caneta. Se for outro, leva ambos!

**Desafio:**
```
let tipoEnsino = "fundamental";
```
Use `if/else` para mostrar o material adequado.*/

alert ('Preciso de saber qual ensino você esta?')
let ensiniFundamental = confirm('Esta no ensino fundamental')
let ensinoMedio = confirm('esta no ensino médio')
let outro = confirm('Outo ensino')

if(ensiniFundamental==true){
    console.log('Precisa de levar lápis')
}
else if(ensinoMedio==true){
    console.log('Leva caneta')
}
else if(outro==true) {
    console.log('Levar ambos')
}
else {
    console.log('Tem que escolher uma das opções')
}