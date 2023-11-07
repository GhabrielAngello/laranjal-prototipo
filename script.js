document.addEventListener('DOMContentLoaded', function() {
  // Inicializa a exibição do conteúdo
  displayInitialContent();

  // Adiciona evento de mudança ao seletor de jornal
  document.getElementById('newspaper').addEventListener('change', function() {
    // Verifica se um jornal foi selecionado e exibe o seletor de ano
    var selectedNewspaper = this.value;
    if (selectedNewspaper) {
      document.getElementById('yearContainer').style.display = 'block';
    } else {
      document.getElementById('yearContainer').style.display = 'none';
    }
  });

  // Evento de clique para o botão de filtrar
  document.getElementById('filterButton').addEventListener('click', function() {
    var selectedNewspaper = document.getElementById('newspaper').value;
    var selectedYear = document.getElementById('year').value;
    if (selectedNewspaper && selectedYear) {
      searchPdfs(selectedNewspaper, selectedYear);
    } else {
      alert('Por favor, selecione um jornal e um ano para filtrar.');
    }
  });

  // Evento de clique para o botão de limpar o filtro
  document.getElementById('clearFilterButton').addEventListener('click', clearFilter);
});

function displayInitialContent() {
  var pdfList = document.getElementById('pdfList');
  pdfList.innerHTML = '<li class="list-group-item">Selecione um jornal para começar.</li>';
}

function searchPdfs(newspaper, year) {
  // Simulando uma busca de dados, aqui você faria uma chamada a uma API ou banco de dados
  var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
  var pdfList = document.getElementById('pdfList');
  pdfList.innerHTML = ''; // Limpa a lista

  months.forEach(function(month, index) {
    // O caminho do arquivo terá que ser ajustado para apontar para o local correto dos seus PDFs
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = '<a href="caminho/para/o/pdf/' + newspaper + '_' + year + '_' + (index + 1) + '.pdf" target="_blank">' + month + ' de ' + year + '</a>';
    pdfList.appendChild(listItem);
  });
}


function clearFilter() {
  document.getElementById('newspaper').value = '';
  document.getElementById('year').value = '';
  document.getElementById('yearContainer').style.display = 'none';
  displayInitialContent(); // Mostra o conteúdo inicial novamente
}

//Quando o usuário rolar para baixo 20px da parte superior do documento, mostre o botão
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Quando o usuário clicar no botão, role para o topo do documento
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}