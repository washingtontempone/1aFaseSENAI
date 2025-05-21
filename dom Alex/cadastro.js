function cadastrar(){
    let nome = document.getElementById("name").value 
    let idade = document.getElementById("age").value
    let tagresultado = document.getElementById("resultado")
    
    tagresultado.innerText = "ben vindo ao nosso sistema, "+ nome + "você tem " + "anos. " + " È um prazer ter voc^^e aqui."
}