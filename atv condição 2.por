programa {
  funcao inicio() {
   // Crie uma programa que verifique se uma pessoa pode dirigir.
    // Deve ser perguntada a idade da pessoa e se ela tiver idade suficiente para dirigir (18 anos ou mais),
     // exiba "Você pode dirigir".

     inteiro dataAniversario, dataAtual, idadeCandidatoMotorista

     escreva("Sua data de nascimento: ")
     leia(dataAniversario)

     escreva("Ano atual: ")
     leia(dataAtual)

     idadeCandidatoMotorista= dataAtual-dataAniversario

     se(idadeCandidatoMotorista > 18){

      escreva("Você pode dirigir")
     }
    
  }
}
