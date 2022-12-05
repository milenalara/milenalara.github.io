var nameMed = undefined, doseMed = undefined, initialDate = undefined, finalDate = undefined, clockValuesReceived = undefined;
calendarFormat = {
    dateFormat: 'dd-mm-yy',
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
}

$(function () {
    $("#calendario").datepicker(calendarFormat);
    $("#calendarioFinal").datepicker(calendarFormat);
});

function store() {
    let valuesToVerify = [nameMed, doseMed, initialDate, finalDate, clockValuesReceived];
    if (verifyHasEmptyValues(valuesToVerify) == false) {
        alert('Preencha todos os campos!');
        return;
    }
    let medicacao = JSON.parse(localStorage.getItem("medicacao") || "[]");
    dados = {
        "name": nameMed,
        "dosagem": doseMed,
        "posologia": clockValuesReceived,
        "dataInicio": initialDate,
        "dataFim": finalDate
    }
    medicacao.push(dados);
    setItemInLocalStorage("medicacao", medicacao);
}

function verifyHasEmptyValues(valuesToCheck) {
    for (i = 0; i < valuesToCheck.length; i++) {
        if (valuesToCheck[i] == undefined || valuesToCheck[i] == "") {
            return false;
        }
    }
}

function setItemInLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function onChangeFunction() {
    nameMed = $('#med-input').val();
    doseMed = $('#med-input-2').val()
    clockValuesReceived = $('#posology').val();
    initialDate = $('#calendario').val()
    finalDate = $('#calendarioFinal').val()
}

let med = localStorage.getItem("medicacao");
let eachMed = JSON.parse(med || "[]");
if (med.length > 0) {
    let rows = '';
    let count = 0;
    for (let i = 0; i < eachMed.length; i++) {
        const element = eachMed[i];
        count++;
        rows += `<tr>
                        <th scope="row">${count}</th>
                        <td>${element.name}</td>
                        <td>${element.dosagem}</td>
                        <td>${element.posologia}</td>
                        <td>${element.dataInicio.replaceAll("-", "/")}</td>
                        <td>${element.dataFim.replaceAll("-", "/")}</td>
                    </tr>`;
    }
    document.getElementById('tbody-med').innerHTML = rows

}
