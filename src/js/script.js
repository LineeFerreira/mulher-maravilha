// passo 1 - dar um jeito de pegar o elementto HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// passo 2- dar um jeito de indetificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        monstrarImagemDeFundo(indice);
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function monstrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}
