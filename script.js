
document.addEventListener("DOMContentLoaded", function() {
  // Função que exibe o campo 'Ano' após selecionar um jornal
  document.getElementById('newspaper').addEventListener('change', function() {
      const selectedNewspaper = this.value;

      if (selectedNewspaper) {
          document.getElementById('yearContainer').style.display = 'block';
      } else {
          document.getElementById('yearContainer').style.display = 'none';
          document.getElementById('monthContainer').style.display = 'none';
      }
  });

  // Função que exibe o campo 'Mês' após selecionar um ano
  document.getElementById('year').addEventListener('change', function() {
      const selectedYear = this.value;

      if (selectedYear) {
          document.getElementById('monthContainer').style.display = 'block';
      } else {
          document.getElementById('monthContainer').style.display = 'none';
      }
  });
});

function filterPdfs() {
  const newspaper = document.getElementById('newspaper').value;
  const year = document.getElementById('year').value;
  const month = document.getElementById('month').value;

  const pdfList = document.getElementById('pdfList');
  pdfList.innerHTML = ''; // Limpa a lista atual.

  if (newspaper && year && month) {
      // Neste exemplo, estou apenas gerando links fictícios com base nas seleções.
      for (let i = 1; i <= 5; i++) { // Vamos exibir 5 links fictícios
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item';
          const link = document.createElement('a');
          link.href = `#${newspaper}-${year}-${month}-${i}`; // URL fictícia
          link.textContent = `${newspaper} - Edição ${i} de ${year}-${month}`;
          listItem.appendChild(link);
          pdfList.appendChild(listItem);
      }
  } else {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = 'Por favor, selecione o jornal, ano e mês para filtrar.';
      pdfList.appendChild(listItem);
  }
}

function clearFilter() {
  const pdfList = document.getElementById('pdfList');
  pdfList.innerHTML = '';
  document.getElementById('newspaper').value = '';
  document.getElementById('year').value = '';
  document.getElementById('month').value = '';
  document.getElementById('yearContainer').style.display = 'none';
  document.getElementById('monthContainer').style.display = 'none';
}