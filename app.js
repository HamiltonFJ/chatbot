function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Recebe a variável do botão pesquisar
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // seo campo pesquisa for uma string vazia nao trará nada
    if (campoPesquisa == "") {
       section.innerHTML="Não existem informações a pesquisar."
       return
    }
    //atribui minusculas ao conteudo do campo pesquisa
    campoPesquisa=campoPesquisa.toLowerCase()
    //atribui minusculas ao conteudo do arquivo dados.js
    // Inicializa uma string vazia para armazenar os resultados
    let resultados="";

    let nome="";
    let descricao="";
    let periodoFabricado="";
    let motor="";

    
    //let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        nome=dado.nome.toLowerCase()
        descricao=dado.descricao.toLowerCase()
        periodoFabricado=dado.periodoFabricado.toLowerCase()
        motor=dado.motor.toLowerCase()

      //console.log(dado.nome.includes(campoPesquisa)) <= Teste de console
      //se no dado.nome incluir o campo de pesquisa, execute:
      if (nome.includes(campoPesquisa) || 
         descricao.includes(campoPesquisa) || 
         periodoFabricado.includes(campoPesquisa) || 
         motor.includes(campoPesquisa))
         {
          // cria um novo elemento 
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
      

      
    }  
    // Atribui a string 'resultados' ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }