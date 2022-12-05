let mockConsultas = [
	{
		"medico": "Juliana Goulart",
		"data": "2022-12-03",
		"horario": "10:00",
		"observacoes": "Pedir troca de medicação"
	},
	{
		"medico": "Gabriel Monteiro",
		"data": "2022-11-15",
		"horario": "09:00",
		"observacoes": "Mencionar as dores"
	}
]

let mockMedicos = [
	{
		"nome": "Juliana Goulart",
		"especialidade": "Alergia e imunologia",
		"telefone": "31912345678",
		"email": "juliana@gmail.com",
		"endereco": "Av. Afonso Pena, 1234"
	},
	{
		"nome": "Gabriel Monteiro",
		"especialidade": "Cardiologia",
		"telefone": "31987456123",
		"email": "gabriel@gmail.com",
		"endereco": "Av. Afonso Pena, 777"
	}
]

let consultas = JSON.parse(localStorage.getItem("consultas")) || mockConsultas

let medicos = JSON.parse(localStorage.getItem("medicos")) || mockMedicos

function renderCards() {

	let cards = document.querySelector("#cards-consultas");
	if (consultas && consultas.length != 0) {
		for (let i = 0; i < consultas.length; i++) {
			let dataStr = String(consultas[i].data);
			let arrayData = dataStr.split("-");
			let dataFormatada = `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`

			let telStr = String(medicos[i].telefone);
			let ddd = telStr.slice(0, 2);
			let telPt1 = telStr.slice(2, 7);
			let telPt2 = telStr.slice(7);
			let telFormatado = `(${ddd})${telPt1}-${telPt2}`

			cards.innerHTML += `
			<a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
				<img src="./img/doctor-icon.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0">
				<div class="d-flex gap-2 w-100 justify-content-between">
					<div>
						<h6 class="mb-0">Dr(a) ${medicos[i].nome}</h6>
						<p class="txt-secondario">${medicos[i].especialidade}</p>
						<p class="mb-0 text-black-50">${telFormatado} | ${medicos[i].email} | ${medicos[i].endereco}</p>
					</div>
					<small class="opacity-50 text-nowrap">${dataFormatada}</small>
				</div>
			</a>`
		}
	} else {
		cards.innerHTML = "<h5>Nenhuma consulta agendada</h5>"
	}

}

renderCards();





