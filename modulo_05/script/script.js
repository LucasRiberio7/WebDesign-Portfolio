// =========================================================
// DEMO 1 — troca de texto (textContent)
// =========================================================
const frases = [
  "O código só ganha vida quando reage a alguém.",
  "Cada clique é uma pergunta; o DOM responde.",
  "Interatividade é a diferença entre uma página e um documento.",
  "JavaScript conecta a intenção do usuário ao conteúdo da tela."
];

const elFrase = document.getElementById("frase");
const btnFrase = document.getElementById("btn-frase");
let indiceFrase = 0;

btnFrase.addEventListener("click", function () {
  indiceFrase = (indiceFrase + 1) % frases.length;
  elFrase.textContent = frases[indiceFrase];
});

// =========================================================
// DEMO 2 — alterar cor e conteúdo via classe (classList)
// =========================================================
const cartao = document.getElementById("cartao");
const btnTema = document.getElementById("btn-tema");

const temas = [
  { classe: "", nome: "Modo Sálvia", cor: "#7FA394", texto: "#1B2A41" },
  { classe: "tema-mostarda", nome: "Modo Mostarda", cor: "#E8A33D", texto: "#1B2A41" },
  { classe: "tema-argila", nome: "Modo Argila", cor: "#C1602B", texto: "#F2EFE9" }
];
let indiceTema = 0;

btnTema.addEventListener("click", function () {
  indiceTema = (indiceTema + 1) % temas.length;
  const tema = temas[indiceTema];

  // alterando estilo diretamente pelo JS
  cartao.style.background = tema.cor;
  cartao.style.color = tema.texto;

  // alterando o conteúdo do título dentro do cartão
  cartao.querySelector("h3").textContent = tema.nome;
});

// =========================================================
// DEMO 3 — contador (estado interno + eventos de clique)
// =========================================================
const elNumero = document.getElementById("numero");
let contador = 0;

function atualizarContador() {
  elNumero.textContent = contador;
}

document.getElementById("btn-mais").addEventListener("click", function () {
  contador++;
  atualizarContador();
});

document.getElementById("btn-menos").addEventListener("click", function () {
  contador--;
  atualizarContador();
});

document.getElementById("btn-zerar").addEventListener("click", function () {
  contador = 0;
  atualizarContador();
});

// =========================================================
// DEMO 4 — destacar palavras-chave (innerHTML)
// =========================================================
const paragrafo = document.getElementById("paragrafo-destaque");
const textoOriginal = paragrafo.textContent;
const termosParaDestacar = ["manipular", "botões", "clique"];

document.getElementById("btn-destacar").addEventListener("click", function () {
  let html = textoOriginal;
  termosParaDestacar.forEach(function (termo) {
    const regex = new RegExp(termo, "gi");
    html = html.replace(regex, "<span class='marcado'>" + termo + "</span>");
  });
  paragrafo.innerHTML = html;
});

document.getElementById("btn-limpar").addEventListener("click", function () {
  paragrafo.textContent = textoOriginal;
});