const inputLocal = document.getElementById("local-dor");
const inputIntensidade = document.getElementById("intensidade-dor");

const btnEnviar = document.getElementById("btn-enviar");

function guardarDados() {
    let dorCorpo = JSON.parse(localStorage.getItem("dores") || "[]");

    const dados = {
        "local da dor": inputLocal.options[inputLocal.selectedIndex].text,
        "intensidade da dor": inputIntensidade.value
    }

    dorCorpo.push(dados);

    localStorage.setItem("dores", JSON.stringify(dorCorpo));
    // alert("Dados salvos com sucesso");

}

function redirecionarHome() {
    window.location.href = 'home.html';
}

btnEnviar.addEventListener("click", guardarDados);

let dores = localStorage.getItem("dores")
if (dores) {
    redirecionarHome()
}