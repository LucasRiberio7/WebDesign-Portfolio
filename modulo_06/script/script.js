/* ===========================================================
   ATIVIDADE DOM - JavaScript
   Seleção de elementos, manipulação de conteúdo/estilo/estrutura,
   eventos de clique e funções reutilizáveis.
=========================================================== */

/* --- Texto e Estilo --- */
const textoAlvo = document.getElementById("texto-alvo");
const btnTexto = document.getElementById("btn-texto");
const btnCor = document.getElementById("btn-cor");

const cores = ["#93c5fd", "#fca5a5", "#86efac", "#fde047"];
let indiceCor = 0;

function alternarTexto() {
  textoAlvo.textContent =
    textoAlvo.textContent === "Texto original."
      ? "Texto alterado!"
      : "Texto original.";
}

function trocarCor() {
  indiceCor = (indiceCor + 1) % cores.length;
  textoAlvo.style.color = cores[indiceCor];
}

btnTexto.addEventListener("click", alternarTexto);
btnCor.addEventListener("click", trocarCor);

/* --- Lista de Tarefas --- */
const listaTarefas = document.getElementById("lista-tarefas");
const inputTarefa = document.getElementById("input-tarefa");
const btnAdicionar = document.getElementById("btn-adicionar");

function adicionarTarefa() {
  const texto = inputTarefa.value.trim();
  if (texto === "") return;

  const novoItem = document.createElement("li");
  novoItem.textContent = texto;
  listaTarefas.appendChild(novoItem);

  inputTarefa.value = "";
}

btnAdicionar.addEventListener("click", adicionarTarefa);

/* --- Contador --- */
const contadorEl = document.getElementById("contador");
const btnIncrementar = document.getElementById("btn-incrementar");
const btnResetar = document.getElementById("btn-resetar");

let contador = 0;

function atualizarContador() {
  contadorEl.textContent = contador;
}

function incrementar() {
  contador++;
  atualizarContador();
}

function resetarContador() {
  contador = 0;
  atualizarContador();
}

btnIncrementar.addEventListener("click", incrementar);
btnResetar.addEventListener("click", resetarContador);