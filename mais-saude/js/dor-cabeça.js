const inputDor = document.getElementById("head-input");
const inputDate = document.getElementById("head-input2");
const btnEnviar = document.getElementById("btn-enviar");

function guardarDados() {
    let dorCorpo = JSON.parse(localStorage.getItem("dores") || "[]");

    const dados = {
        "dorCabeca": {
            "intensidade": inputDor.value,
            "dataInicial": inputDate.value
        }
    }

    dorCorpo.push(dados);

    localStorage.setItem("dores", JSON.stringify(dorCorpo));
    alert("Dados salvos com sucesso");
    location.reload(true)
}


btnEnviar.addEventListener("click", guardarDados);