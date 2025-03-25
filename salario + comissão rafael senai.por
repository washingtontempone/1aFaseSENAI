programa {
  funcao inicio() {
   // Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro).
   // Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, 
   //com duas casas decimais.

   real  salarioMensal, comisao, vendaEfetuada
   cadeia vendedor

   escreva("Escreva o nome do vendendor: ")
   leia(vendedor)

   escreva("Salario mensal: ")
   leia(salarioMensal)

   escreva("Vendas do mês; ")
   leia(vendaEfetuada)

   comisao=(vendaEfetuada*0.15)

   escreva("Salário seu mensal é ", comisao+salarioMensal)
    
  }
}
