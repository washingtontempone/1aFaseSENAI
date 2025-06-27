let nomes = ["joao" , "clara", "jonas", "maria", "alessandro", "carlos"]
console.log(nomes[10])
console.log(nomes.length)
nomes.forEach((elemrnt, index ) =>
{
    console.log(elemrnt + "@gmail.com")
}
);
nomesComSobrenome = nomes.map ((nomes) =>
{
    return nome + "da silva"
}
)
let nomesFiltrados = nomes.filter((nome) => nome.length > 5)
let finNome = nomes.find((nome) => nome.length > 5)
console.log(findNome)





let nomes2 = [ washington, obonito, adrian, pedro, julia, cida]
let nomesAcumlado= nomes.reduce((acumulado, valorAtual) => acumulado + "," + valorAtual)
console.log(nomes2)

