/*O cliente quer um sabor de sorvete. Só há: "baunilha",
 "chocolate" ou "morango".
```
let sabor;
```
Use condicionais para exibir:

- "Servindo sorvete de [sabor] 🍦"
- Ou "Sabor indisponível 😢"*/

alert (`click opção voce deseja:
     1- Balnilha
     2- chocolate
     3- Morango`)
let sabor= prompt("Qual sabaor você deseja?")

if( sabor==1){
    console.log('Sevindo sorvete Balnilha')
}else if( sabor==2){
    console.log('Sevindo sorvete Chocolate')
}else if( sabor==3){
    console.log('Sevindo sorvete Morango')
}else{
    console.log('Sabor indisponível 😢')
}