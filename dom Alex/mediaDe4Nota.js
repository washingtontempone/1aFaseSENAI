    function media(){
        let nota1 = Number(document.getElementById("nota1").value)
        let nota2 = Number(document.getElementById("nota2").value)
        let nota3 = Number(document.getElementById("nota3").value)
        let nota4 = Number(document.getElementById("nota4").value)
        let resParaMostrar= document.getElementById("resultado")
       
       let resultado = (nota1 + nota2 + nota3 + nota4) /4

        resParaMostrar.innerText = resultado

    }
