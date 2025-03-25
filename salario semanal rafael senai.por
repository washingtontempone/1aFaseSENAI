programa {
  funcao inicio() {
   // Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e 
   //calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

   real numeroRegistro, salario, horas, horasSemana

   escreva("Digite seu numero de registro: ")
   leia(numeroRegistro)

   escreva("digite valor hora: ")
   leia(horas)

   escreva("Horas trabalhada: ")
   leia(horasSemana)

   salario = (horas*horasSemana)

   escreva("Funcionario: ",numeroRegistro, "\n","Salario é: ","R$: ", salario)
    
  }
}
