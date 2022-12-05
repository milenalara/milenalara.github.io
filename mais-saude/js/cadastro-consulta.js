let listaMedicos = JSON.parse(localStorage.getItem("medicos"))

let inputData = document.getElementById("data");
let inputHorario = document.getElementById("horario");
let inputObservacoes = document.getElementById("observacoes");
let selectMedico = document.getElementById("select-medico");
const btnEnviar = document.getElementById("btn-enviar");

function mostraMedicos() {
	let medicos = `<option selected>Selecione o médicou ou médica</option>`

	for (let i = 0; i < listaMedicos.length; i++) {
		medicos += `<option value="${i + 1}">${listaMedicos[i].nome} (${listaMedicos[i].especialidade})</option>`;
	}

	selectMedico.innerHTML = medicos
}

mostraMedicos()

let mockConsultas = [
	{
		"medico": "Juliana Goulart",
		"data": "2022-12-03",
		"horario": "10:00",
		"observacoes": "Pedir troca de medicação"
	},
	{
		"medico": "Gabriel Monteiro",
		"data": "2022-11-03",
		"horario": "09:00",
		"observacoes": "Mencionar as dores"
	}
]

let consultas = JSON.parse(localStorage.getItem("consultas")) || mockConsultas;

function guardarDados() {

	const consulta = {
		"medico": selectMedico.options[selectMedico.selectedIndex].text,
		"data": inputData.value,
		"horario": inputHorario.value,
		"observacoes": inputObservacoes.value
	}

	consultas.push(consulta);

	localStorage.setItem("consultas", JSON.stringify(consultas));

	alert("Consulta cadastrada com sucesso");
}

btnEnviar.addEventListener("click", guardarDados);