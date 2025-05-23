function mostrarLogin(){
    
    document.getElementById('login').style.display= 'flex' /* flex aprece o botão */
    document.getElementById('cadastro').style.display= 'none' /* none desaparece o botão*/
}
function mostrarLCadastro(){

    document.getElementById('login').style.display= 'none'
    document.getElementById('cadastro').style.display= 'flex'
}