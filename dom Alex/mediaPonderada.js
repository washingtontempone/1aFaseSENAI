function media(){
    let nota1 = Number(document.getElementById("nota1").value)
    let ponderado1 = Number(document.getElementById("ponderado1").value)

    let nota2 = Number(document.getElementById("nota2").value)
    let ponderado2 = Number(document.getElementById("ponderado2").value)

    let nota3 = Number(document.getElementById("nota3").value)
    let ponderado3 = Number(document.getElementById("ponderado3").value)

    let nota4 = Number(document.getElementById("nota4").value)
    let ponderado4 = Number(document.getElementById("ponderado4").value)

    let mediaponderada = document.getElementById("resultado")

    let resultado1 = ((nota1 * ponderado1) + (nota2 * ponderado2) + (nota3 * ponderado3) + (nota4 * ponderado4)) / (ponderado1 + ponderado2 + ponderado3 + ponderado4)

    mediaponderada.innerText = " Sua nota é:  "+resultado1

}