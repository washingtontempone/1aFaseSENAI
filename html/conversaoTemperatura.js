// Solicite ao usuário que insira uma temperatura em Celsius.
// Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).
// Exiba o resultado em uma mensagem de alert .

function temperatura(){
    let Celsius= Number(prompt("Qual é sua tempearatura"))
    Celsius = Celsius *(9/5) +32

    alert("Sua temperatura é: "+ Celsius +" Fahrenheit" )
}
