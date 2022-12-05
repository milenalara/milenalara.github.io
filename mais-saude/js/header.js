const headerSection = document.getElementById("header")

function loadHeader() {
  const header = `
    <nav class="navbar navbar-expand-lg header-color">
      <div class="container-fluid">
        <a class="navbar-brand" href="./home.html">
          <img src="img/logo.png" alt="Logo" style="width:40px;" class="rounded-pill">
        </a>
        <button class="navbar-toggler white-button" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon white-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link link-menu" href="./home.html">Home</a>
            <a class="nav-link link-menu" href="./cadastro-medicacao.html">Medicações</a>
            <a class="nav-link link-menu" href="./consultas.html">Consultas</a>
            <a class="nav-link link-menu" href="./exames.html">Exames</a>
            <a class="nav-link link-menu" href="./medicos.html">Meus médicos</a>
          </div>
        </div>
      </div>
    </nav>
`
  headerSection.innerHTML = header
}

loadHeader()