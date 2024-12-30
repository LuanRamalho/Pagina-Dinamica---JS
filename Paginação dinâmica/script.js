const pageContent = document.getElementById("page-content");
console.log(pageContent);
const pageButtons = document.querySelectorAll(".page-btn");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

const pages = [
  "Página 1: Bem-vindo à primeira página!",
  "Página 2: Aqui estão mais algumas informações.",
  "Página 3: Você está na metade do caminho!",
  "Página 4: Quase no fim!",
  "Página 5: Obrigado por visitar a última página",
];
let currentPage = 1;

function updatePagination() {
  pageContent.textContent = pages[currentPage - 1];

  pageButtons.forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === currentPage);
  });

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === pages.length;
}
pageButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentPage = index + 1;
    updatePagination();
  });
});

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < pages.length) {
    currentPage++;
    updatePagination();
  }
});
updatePagination();
