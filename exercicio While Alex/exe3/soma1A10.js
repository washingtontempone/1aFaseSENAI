function somar(){

    let multiplicar = 1

    while(multiplicar  <= 10){
        let multiplicando = 1 
        while( multiplicando <= 10){
            let resultado = multiplicar * multiplicando
            alert("Taboada do: "+ multiplicar + "miltiplicado por: " + multiplicando + "resultado "+ resultado )
            multiplicando++
        }

        multiplicar++
    }

}