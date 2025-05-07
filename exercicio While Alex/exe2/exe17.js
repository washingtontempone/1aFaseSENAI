/*/A pista de esqui está liberada apenas para maiores de 16 anos **e**
 que tenham equipamento completo.

**Desafio:**

let idade;
let temEquipamento;
```
- "Pode esquiar 🎿" ou
- "Não liberado."*/

alert (`A pista de esqui está liberada apenas para maiores de 16 anos
                     e que tenham equipamento completo`)

let idade= confirm ('Tem mais de 16 anos')
let temEquipamento= confirm ('Seu equipamento esta completo')

if( idade==true && temEquipamento==true){
    console.log('Pode esquiar')
}else{
    console.log('Não liberado')
}