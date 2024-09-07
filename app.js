function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p class='mensagem-erro'>Nada foi encontrado. Você precisa digitar algo.</p>";
      }

// Garante que o usuário digite pelo menos 3 caracteres.
if (campoPesquisa.length < 3) {
    alert("O termo de pesquisa deve ter pelo menos 3 caracteres.");
    return;
}
campoPesquisa = campoPesquisa.toLowerCase();

   
    console.log(campoPesquisa);
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let título = "";
    let descrição = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        título = dado.título.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se título includes campoPesquisa
        if (título.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
  // Constrói o HTML para cada item do resultado da pesquisa
  resultados += `
  <div class="item-resultado">
    <h2><a target="_blank">${dado.título}</a></h2>
    <p class="descrição-meta">${dado.descrição}</p>
    <a href=${dado.link} target="_blank">Mais informações</a>
  </div>
  `;
        }
    
      // Verifica se a pesquisa retornou resultados.  
    }
    if(!resultados) {
        resultados = "<p class='nenhumResultado'>Nenhum resultado encontrado!</p>"
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }



