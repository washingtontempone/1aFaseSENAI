//let nome , email, endereco
inicializar

let usuario= {
    nome: '',
    email:'',
    senha:''
}
function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value

    if(nome === usuario.nome && senha === usuario.senha){
        alert("login esfetuado com sucesso")
        mostrarProdutos()
        limparInputs()
    }else{
        alert("errou miseravel")
    }
    mostrarProdutos()
}

function cadastrar(){
    usuario.nome = document.getElementById('inpCadNome').value
    usuario.senha = document.getElementById('inCadSenha').value
    usuario.email = document.getElementById('inCadEmail').value
    //alert("Cadastro com suscesso")
    console.log(usuario)
    mostrarLogin()
    limparInputs()

    
}



function mostrarLogin() {
    esconderTodas()
    document.getElementById('login').style.display = 'flex' /* flex aprece o botão */
    document.getElementById('inpLogNome').focus()
}
function mostrarCadastro() {
    esconderTodas()
    document.getElementById('cadastro').style.display = 'flex'
    document.getElementById('inpCapNome').focus()
}

function mostrarProdutos() {
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex'
    document.getElementById('inpCapNome').focus()
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

    