//console.log(dados);
// loop para cada dado dentro da lista de dados
let section=document.getElementById("resultados-pesquisa")
console.log(section);
let resultados =""
for (let dado of dados)
{    resultados+=
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
   `
}
section.innerHTML = resultados