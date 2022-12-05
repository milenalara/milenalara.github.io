var vTemperatura, vInicio;

    function inicia(){
        if (localStorage.temperatura){
            vTemperatura=localStorage.temperatura;
            vInicio=localStorage.quandocomecou;
        }
    }
        function salvardados(){
            vTemperatura=document.getElementById("temperatura").value;
            vInicio=document.getElementsByName("quandocomecou").value;
            localStorage.temperatura=vTemperatura;
            localStorage.quandocomecou=vInicio;
        }
        window.addEventListener("load", inicia);
