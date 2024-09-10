function search() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se campo pesquisa for vazio
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada encontrado! Precisa digitar por filmes ou séries</p>";
    return;
  }

  // Colocando valor em minúsculo
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos).
  for (let dado of dados) {
    // Colocando descrição e titulo em minúsculo
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    // Se titulo for igual ao campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // Constrói o HTML para cada item do resultado, incluindo o título, descrição e um link.
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
            <p class="descricao-meta">
              ${dado.descricao}
            </p>
            <a href="#" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Caso não encontre nada referente a pesquisa do usuário na base, retorne a msg abaixo
  if (!resultados) {
    section.innerHTML = "<p>Nada foi encontrado em nossa base de dados!</p>";
    return;
  }

  // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior.
  section.innerHTML = resultados;
}
