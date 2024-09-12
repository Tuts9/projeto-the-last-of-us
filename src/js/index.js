const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
let indiceAtual = 0;

function mudarImagem() {
  const botaoAtual = document.querySelector('.selecionado');
  botaoAtual.classList.remove('selecionado');
  imagens[indiceAtual].classList.remove('ativa');
  indiceAtual = (indiceAtual + 1) % imagens.length;
  imagens[indiceAtual].classList.add('ativa');
  botoesCarrossel[indiceAtual].classList.add('selecionado');
}

let temporizador = setInterval(mudarImagem, 3000);

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    clearInterval(temporizador);
    const botaoAtual = document.querySelector('.selecionado');
    botaoAtual.classList.remove('selecionado');
    botao.classList.add('selecionado');
    imagens[indiceAtual].classList.remove('ativa');
    indiceAtual = indice;
    imagens[indiceAtual].classList.add('ativa');
    temporizador = setInterval(mudarImagem, 2000);
  });
});
