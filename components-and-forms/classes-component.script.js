class ClassesComponent extends HTMLElement {
  constructor() {
    super();
    this.carregarAulas();
  }

  async carregarAulas() {
    try {
      const resposta = await fetch("aulas.json");
      const dados = await resposta.json();
      this.renderizarAulas(dados);
    } catch (erro) {
      console.error("Erro ao carregar aulas:", erro);
    }
  }

  getClassificacaoNota(nota) {
    if (nota < 6) return "cc-nota-baixa";
    if (nota < 8) return "cc-nota-media";
    return "cc-nota-alta";
  }

  renderizarAulas(aulas) {
    this.innerHTML = `
            <div class="cc-disciplinas">
                ${aulas
                  ?.map(
                    (aula) => `
                    <div class="cc-disciplina">
                        <div class="cc-disciplina-header">
                            <div class="cc-disciplina-info">
                                <h3 class="cc-disciplina-titulo">${
                                  aula.disciplina
                                }</h3>
                                <span class="cc-disciplina-detalhes">${
                                  aula.local
                                } • ${aula.horario}</span>
                            </div>
                            <div class="cc-disciplina-stats" style="flex-direction: column;">
                                <span class="cc-badge ${this.getClassificacaoNota(
                                  aula.nota
                                )}">
                                    <span class="material-symbols-outlined" style="font-size: 14px">grade</span>
                                    ${aula.nota}
                                </span>
                                <span class="cc-badge cc-faltas">
                                    <span class="material-symbols-outlined" style="font-size: 14px">event_busy</span>
                                    ${aula.frequencia}
                                </span>
                            </div>
                        </div>
                        <div class="cc-aulas-info">
                            <div class="cc-aula-status ${
                              aula.prova_alert
                                ? "cc-status-pendente"
                                : "cc-status-concluida"
                            }"></div>
                            <span>Próxima avaliação: ${aula.prova}</span>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
  }
}

customElements.define("classes-component", ClassesComponent);
