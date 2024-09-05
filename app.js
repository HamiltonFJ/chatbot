function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Concatena o HTML de cada resultado à string 'resultados'
      resultados+=
      `
      <div class="item-resultado">
                  <h2> 
                      <a href="#" target="_blank">${dado.nome}</a> 
                  </h2>
                     <p class="descricao-meta">${dado.descricao}</p> 
                     <p><h4>Período de Fabricação</h4></p>
                     <p class="periodoFabricado-meta">${dado.periodoFabricado}</p> 
                     <p><h4> Motorização</h4></p>
                     <p class="motor-meta">${dado.motor}</p> 
                     <p><a href=${dado.imagem} target="_blank">Imagem</a></p>
                     <a href=${dado.linkInformacoesCompletas} target="_blank">Mais Informações </a>                  
      </div>
      `;
    }  
    // Atribui a string 'resultados' ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }