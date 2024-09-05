function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Concatena o HTML de cada resultado à string 'resultados'
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          </div>
      `;
    }
  
    // Atribui a string 'resultados' ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }