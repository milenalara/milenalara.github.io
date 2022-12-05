var vsentindo;
function inicia(){
    if (localStorage.enviar){
        vsentindo=localStorage.enviar;
     
    }
}
    function enviar(){
        vsentindo=document.getElementsByName("enviar").value;
        localStorage.enviar=vsentindo;
    }
    window.addEventListener("load", inicia);
   