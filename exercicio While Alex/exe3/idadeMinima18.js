let idadeMinima =0
let aceitouTermo = false
while((aceitouTermo== false )|| (idadeMinima < 18 )) {
    idadeMinima = Number ( prompt ( "Qual sua idade?" ))
    let resposta = prompt("Aceitou o termo sim ou não")
    if(resposta ==="sim") aceitouTermo = true
    else aceitouTermo = true
}
if(aceitouTermo || idadeMinima < 18 ){
    alert("Esta inscrito")
}