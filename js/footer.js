const footerSection = document.getElementById("footer")

function loadFooter() {
  const footer = `
    <p>Copyright - 2022</p>
    <p>Disciplina de Trabalho Interdisciplinar: Aplicações Web - PUC Minas
    </p>
`
  footerSection.innerHTML = footer
}

loadFooter()