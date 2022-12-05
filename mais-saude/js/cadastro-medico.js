let inputNome = document.getElementById('inputnome')
let inputEspecialidade = document.getElementById("especialidades")
let inputTelefone = document.getElementById('inputtelefone')
let inputEmail = document.getElementById('inputemail')
let inputEndereco = document.getElementById('input-endereco')
const btnEnviar = document.getElementById("btn-enviar")

const listaEspecialidades = [
  "Alergia e imunologia",
  "Anestesiologia",
  "Angiologia",
  "Cardiologia",
  "Cirurgia geral",
  "Clínica médica",
  "Dermatologia",
  "Endocrinologia e metabologia",
  "Gastroenterologia",
  "Geriatria",
  "Ginecologia e obstetrícia",
  "Hematologia e hemoterapia",
  "Infectologia",
  "Mastologia",
  "Nefrologia",
  "Neurocirurgia",
  "Neurologia",
  "Nutrologia",
  "Oftalmologia",
  "Oncologia clínica",
  "Ortopedia e traumatologia",
  "Otorrinolaringologia",
  "Pediatria",
  "Pneumologia",
  "Psiquiatria",
  "Reumatologia",
  "Urologia"
]

function mostraEspecialidades() {
  let especialidades = `<option selected>Selecione a especialidade</option>`
  for (let i = 0; i < listaEspecialidades.length; i++) {
    especialidades += `<option value="${0 + 1}">${listaEspecialidades[i]}</option>`
  }

  inputEspecialidade.innerHTML = especialidades
}

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

localStorage.setItem("medicos", JSON.stringify(mockMedicos));

function guardarDados() {
  let medicos = JSON.parse(localStorage.getItem("medicos")) || mockMedicos;

  const medico = {
    "nome": inputNome.value,
    "especialidade": inputEspecialidade.options[inputEspecialidade.selectedIndex].text,
    "telefone": inputTelefone.value,
    "email": inputEmail.value,
    "endereco": inputEndereco.value,
  }

  medicos.push(medico);

  localStorage.setItem("medicos", JSON.stringify(medicos));

  alert("Médico(a) cadastrada com sucesso");
}

mostraEspecialidades();

btnEnviar.addEventListener("click", guardarDados);