// aqui estamos criando os objetos que vão ser utilizados pelo projeto

const medicacao = {
  nome,
  dosagem,
  posologia,
  horarioPrimeiraDose,
  horarioSegundaDose,
  dataInicio,
  dataFim
}

const consulta = {
  data,
  horario,
  observacoes,
  medico
}

const medico = {
  nome,
  especialidade,
  telefone,
  email,
  endereco
}

const sintomas = {
  dorCabeca, // data, true or false
  dorCorpo, // data, true or false, localizacao
  febre // data, true or false, graus
}

const bemEstar = {
  dieta, // campo de texto, tipo diário
  atividadeFisica, // sim ou não
  cigarro, // sim ou não
  agua, // quantos litros
  sono, // quantas horas
}

const historicoPaciente = {
  doencas, // input texto
  cirurgias, // data e texto
  internacoes,
  alergias
}