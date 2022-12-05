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

const medicos = JSON.parse(localStorage.getItem("medicos")) || mockMedicos;

let str = '';

for (let j = 0; j < medicos.length; j++) {

	str += `
        <tr>
            <td>Dr(a) ${medicos[j].nome}</td>
            <td>${medicos[j].especialidade}</td>
            <td>${medicos[j].telefone}</td>
            <td>${medicos[j].email}</td>
            <td>${medicos[j].endereco}</td>
        </tr>
        `

	document.getElementById('table').innerHTML = str;
}