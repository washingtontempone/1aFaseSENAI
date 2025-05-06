let nome = document.getElementById("nome")
let enviarNome = document.getElementById("enviarNome")
let convite = document.getElementById("convite")
let enviarConvite = document.getElementById("enviarConvite")
let div = document.getElementById("res")
let nomeVerificar
let codigoVerificador
let listNome = "Joana"
let codigo = "12345"

enviarConvite.addEventListener("click", clicouConvite)
enviarNome.addEventListener("click", clicouNome)

function clicouNome() {
    nomeVerificar = (nome.value)

    if (nomeVerificar === listNome) {
        console.log("True")
        div.innerHTML = "<strong>Permitido!!</strong>"
    } else {
        console.log("False")
        div.innerHTML = "<strong>Negado!</strong>"
    }
}

function clicouConvite() {

    codigoVerificador = (convite.value)

    if (codigoVerificador === codigo) {
        console.log("True")
        div.innerHTML = "<strong>Permitido!!</strong>"
    } else  {
        console.log("False")
        div.innerHTML = "<strong>Negado!</strong>"
    }
}