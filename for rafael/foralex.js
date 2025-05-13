let resultado =''
for( contador = 0; contador <= 100; contador ++){
    if(contador % 2 == 0 || contador%3==0 || contador ==25){
        //alert ("Número atende a regra: " +contador)
        resultado += contador + ','
    }
}
alert(resultado)