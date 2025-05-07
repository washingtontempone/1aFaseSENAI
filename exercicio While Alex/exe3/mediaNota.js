let n1
let n2
let n3
let resultado
function nota1(){
    n1 = Number(prompt("Digite sua primeira nota"))
}function nota2(){
    n2 = Number(prompt("Digite sua segunda nota"))
}function nota3(){
    n3 = Number(prompt("Digite sua terceira nota"))
}function media(){
    resultado= (n1+n2+n3)/3
    alert("Media da sua nota é: " + resultado)
}