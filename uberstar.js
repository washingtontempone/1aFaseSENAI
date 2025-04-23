function Uberstar(){

let distaciaPecorrida= prompt("Qual sua distacia ser percorrida?")
let tempoGasto= distaciaPecorrida*1.5
let tempoGastoHora = (tempoGasto) *60*60
let tempoGastoDia = (tempoGastoHora) *24
let tempoGastoMes = (tempoGastoDia) *30
let tempoGastoAno = (tempoGastoMes) *12

if(tempoGastoHora){
    alert(`gatou horas  `+ tempoGastoHora+  `  segundos `) 
    alert(`gatou dia  `+ tempoGastoDia+  `  segundos `)
    alert(`gatou mês  `+ tempoGastoMes+  `  segundos `)
    alert(`gatou Ano  `+ tempoGastoAno+  `  segundos `)
}
}










