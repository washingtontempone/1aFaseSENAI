function gerarCaracterAleatorio() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    return caracteres[indiceAleatorio];
}   
function mostrar(){
    let qauntidade = Number (prompt("Informe quantos caracteres sua senha deve ter - de 1 a1oo"))
    let senha = ""
    while (qauntidade > 0){
        senha += gerarCaracterAleatorio()
        qauntidade = qauntidade - 1
    }
    alert("Sua senha é: " + senha)
}
