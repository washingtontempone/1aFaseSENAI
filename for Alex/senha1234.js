//3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" 
//se o nome for "admin" ou a senha for "1234".

let usuario = prompt("Digite o usuario")
let senha = Number(prompt("Digite sua senha!"))

if( usuario === "admin" && senha === 1234){
    alert("Usuario logado!!!")
}else alert("usuario ou senha incorreto!!!!!!!!!")