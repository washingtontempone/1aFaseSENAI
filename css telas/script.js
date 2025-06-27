//let nome , email, endereco
inicializar()

let usuarios = []

function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value

    for( i=0; i<usuarios.length; i++){
        if(nome === usuarios[i].nome || nome=== usuarios[i].email && usuarios[i].senha === senha){
            alert("login esfetuado com sucesso")
            mostrarProdutos()
            limparInputs()
        }
        // else{
        //     alert("errou miseravel")
        // }

    }
    
    mostrarProdutos()
}

function cadastrar(){
    let usuario= {
        nome: document.getElementById('inpCadNome').value,
        senha: document.getElementById('inCadSenha').value,
        email:document.getElementById('inCadEmail').value   
    }
    usuarios.push(usuario)
    limparInputs()
    mostrarLogin()   
    alert("Cadastro com suscesso")
    console.log(usuario)
}
function mostrarLogin() {
    esconderTodas()
    document.getElementById('login').style.display = 'flex' /* flex aprece o botão */
    document.getElementById('inpLogNome').focus()
}
function mostrarCadastro() {
    esconderTodas()
    document.getElementById('cadastro').style.display = 'flex'
    document.getElementById('inpCadNome').focus()
}
function mostrarProdutos() {
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex'
    document.getElementById('navBar').style.display = 'flex'
    document.getElementById('inpCadNome').focus()
}
function esconderTodas() {
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
}
function limparInputs(){
    document.getElementById('inpCadNome').value
    document.getElementById('inCadSenha').value
    document.getElementById('inCadEmail').value

    document.getElementById('inpLogNome').value
    document.getElementById('inpLogSenha').value

}
function inicializar(){
    mostrarLogin()
}

    