function resultado(){
    let nome = document.getElementById("nome").value 
    let idade= Number(document.getElementById("idade").value)
    let sexo = document.getElementById("sexo").value
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let massaCorporal = document.getElementById("massaCorporal")

    let resultado = (peso * peso) / altura

    massaCorporal.innerText = "Olá "+nome+ " você tem  "+ idade+ " anos, seu sexo é " + sexo + "  ,sua massa corporal é " + resultado 
}