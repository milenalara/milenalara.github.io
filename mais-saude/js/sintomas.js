const btnFebre = document.getElementById("sintomas-febre")
const btnCabeca = document.getElementById("sintomas-cabeca")
const btnCorpo = document.getElementById("sintomas-corpo")

function redirecionaFebre() {
  window.location.href = 'febre.html';
}

function redirecionaDorCabeca() {
  window.location.href = 'dor-cabeca.html';
}

function redirecionaDorCorpo() {
  window.location.href = 'dores-corpo.html';
}

btnFebre.addEventListener("click", redirecionaFebre)
btnCabeca.addEventListener("click", redirecionaDorCabeca)
btnCorpo.addEventListener("click", redirecionaDorCorpo)