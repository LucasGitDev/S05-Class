const aulas = [
    {
        titulo: "Reserva de Armário",
        descricao: "Uma aplicação para introduzir os conceitos de HTML, CSS e JavaScript",
        link: "reserva-armario"
    },
    {
        titulo: "Grid e Responsividade",
        descricao: "Projeto que será utilizado como case durante a disciplina",
        link: "grid-responsive"
    },
    {
        titulo: "Cores, Tipografia e Icones",
        descricao: "Aula sobre cores, tipografia e icones",
        link: "colors-typography-and-icons"
    },
    // Adicione mais aulas conforme necessário
];

function criarCardAula(aula) {
    return `
        <div class="aula-card">
            <h3>${aula.titulo}</h3>
            <p>${aula.descricao}</p>
            <a href="${aula.link}">Ver mais</a>
        </div>
    `;
}

function renderizarAulas() {
    const aulasContainer = document.querySelector('.aulas-grid');
    const cardsHTML = aulas.map(criarCardAula).join('');
    aulasContainer.innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', renderizarAulas);
