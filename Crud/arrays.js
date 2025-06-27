let nomes = ["joao", "clara", "jonas", "maria", "alessandro", "carlos"]
console.log(nomes[10])
console.log(nomes.length)
nomes.forEach((elemrnt, index) => {
    console.log(elemrnt + "@gmail.com")
}
);
nomesComSobrenome = nomes.map((nome) => {
    return nome + "da silva"
}
)
let nomesFiltrados = nomes.filter((nome) => nome.length > 5)
let finNome = nomes.find((nome) => nome.length > 5)
console.log(finNome)




let nomes2 = ["washington", "obonito", "adrian", "pedro", "Julia", "cida"]
let nomesAcumlado = nomes.reduce((acumulado, valorAtual) => acumulado + "," + valorAtual)
console.log(nomes2)

let numeros = [10, 20, 30, 40, 50]
let numerosInvertidos = numeros.map((elementos, index) => {
    let invertido = numeros.length -1
    return  numeros [invertido - index]
}

)
console.log(numerosInvertidos)