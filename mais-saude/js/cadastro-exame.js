var counter = 0;
var fileExam;
//função verifica se o input está vazio, se não tiver transforma o valor em json e salva no localstorage
function store() {
  if (fileExam == '' | fileExam == undefined) {
    alert('selecione pelo menos um arquivo');
    return;
  }
  if (validateExtension() == 0) {
    alert("Arquivo inválido. Selecione um arquivo com as seguintes extensões: pdf, jpg, jpeg, png");
    return;
  };
  let exames = JSON.parse(localStorage.getItem("exames") || "[]");
  dados = {
    "exame": fileExam
  }
  exames.push(dados);
  localStorage.setItem('exames', JSON.stringify(exames));
  location.reload(true)
}

function validateExtension() {
  ext = fileExam.split('.').pop();
  validExtensions = ['pdf', 'jpg', 'jpeg', 'png'];
  if (!validExtensions.includes(ext)) {
    return 0;
  }
}

function remove() {
  $('#file-exam').val("");
}

function onChangeFunction() {
  fileExam = $('#file-exam').val();
}

let exams = localStorage.getItem("exames");
let eachExam = JSON.parse(exams || "[]");
if (exams.length > 0) {
  let rows = '';
  let count = 0;
  for (let i = 0; i < eachExam.length; i++) {
    const element = eachExam[i];
    let value = element.exame.split("fakepath\\")
    count++;
    rows += `<tr>
                        <th scope="row">${count}</th>
                        <td>${value[1]}</td>
                    </tr>`;
  }
  document.getElementById('tbody-exam').innerHTML = rows
}