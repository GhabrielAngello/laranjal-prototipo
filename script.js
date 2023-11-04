document.addEventListener("DOMContentLoaded", function () {
  // Função que exibe o campo 'Ano' após selecionar um jornal
  document.getElementById("newspaper").addEventListener("change", function () {
    const selectedNewspaper = this.value;

    if (selectedNewspaper) {
      document.getElementById("yearContainer").style.display = "block";
    } else {
      document.getElementById("yearContainer").style.display = "none";
      document.getElementById("monthContainer").style.display = "none";
    }
  });

  // Função que exibe o campo 'Mês' após selecionar um ano
  document.getElementById("year").addEventListener("change", function () {
    const selectedYear = this.value;

    if (selectedYear) {
      document.getElementById("monthContainer").style.display = "block";
    } else {
      document.getElementById("monthContainer").style.display = "none";
    }
  });
});

function filterPdfs() {
    const newspaper = document.getElementById("newspaper").value;
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
  
    const pdfList = document.getElementById("pdfList");
    pdfList.innerHTML = ""; // Limpa a lista atual.
  
    if (newspaper && year && month) {
      // Adiciona a lista de PDFs filtrados
      for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement("li");
        listItem.className =
          "list-group-item d-flex justify-content-between align-items-center";
  
        const link = document.createElement("a");
        link.href = `#${newspaper}-${year}-${month}-${i}`;
        link.textContent = `${newspaper} - Edição ${i} de ${year}-${month}`;
        link.className = "pdf-link";
        listItem.appendChild(link);
  
        const iconsContainer = document.createElement("div");
        iconsContainer.className = "icons-container";
  
        const printButton = document.createElement("button");
        printButton.className = "btn";
        printButton.innerHTML =
          '<i class="bi bi-printer" style="font-size: 30px;"></i>';
        printButton.onclick = function () {
          const printWindow = window.open("", "_blank");
          printWindow.document.write(
            "<html><head><title>Print</title></head><body>"
          );
          printWindow.document.write(link.outerHTML);
          printWindow.document.write("</body></html>");
          printWindow.document.close();
          printWindow.print();
        };
        iconsContainer.appendChild(printButton);
  
        const emailButton = document.createElement("button");
        emailButton.className = "btn";
        emailButton.innerHTML =
          '<i class="bi bi-envelope" style="font-size: 30px;"></i>';
        emailButton.onclick = function () {
          const email = prompt("Digite o e-mail para o qual deseja enviar o arquivo:");
          if (email) {
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(
              `PDF do jornal ${newspaper} - Edição ${i} de ${year}-${month}`
            )}&body=${encodeURIComponent("Segue em anexo o PDF solicitado.")}`;
          }
        };
        iconsContainer.appendChild(emailButton);
  
        const downloadButton = document.createElement("a");
        downloadButton.className = "btn";
        downloadButton.innerHTML =
          '<i class="bi bi-file-earmark-arrow-down" style="font-size: 30px;"></i>';
        downloadButton.href = 'link_do_seu_arquivo.pdf'; // Substitua isso pelo caminho correto do seu arquivo PDF.
        downloadButton.download = `${newspaper} - Edição ${i} de ${year}-${month}.pdf`; // O nome do arquivo baixado.
        iconsContainer.appendChild(downloadButton);
  
        listItem.appendChild(iconsContainer);
  
        pdfList.appendChild(listItem);
      }
    } else {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.textContent =
        "Por favor, selecione o jornal, ano e mês para filtrar.";
      pdfList.appendChild(listItem);
    }
  }
  
  

function clearFilter() {
  const pdfList = document.getElementById("pdfList");
  pdfList.innerHTML = "";
  document.getElementById("newspaper").value = "";
  document.getElementById("year").value = "";
  document.getElementById("month").value = "";
  document.getElementById("yearContainer").style.display = "none";
  document.getElementById("monthContainer").style.display = "none";
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
