function calcularAcima10(){ 
    // esta function vai entrar dentro da functio calcularBonus
    return 0.2
}
function calcularAbaixo10(){
    // esta function vai entrar dentro da functio calcularBonus
    return 0.5 // return retorna dentro desta function calcularBonus e pegar os 
    // valores desta function
}
function calcularBonus(){
    let salario = Number (prompt("Digite seu salario: "))
    let procentagem = salario > 10000 ? calcularAcima10() : calcularAbaixo10()
    // let acima e tenario,  ? =  &&    : =  ||
    let resultado = salario + (salario * procentagem)

    alert("Seu salário com bonus é:  " + resultado)
}