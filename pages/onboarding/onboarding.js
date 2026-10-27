// Preencher o conteúdo das cinco etapas aqui, mantendo um único HTML.
// Exemplo de caminho de imagem: assets/img/boas-vindas.png.
const etapas = [
    { titulo: '', descricao: '', imagem: '', textoAlternativo: '' },
    { titulo: '', descricao: '', imagem: '', textoAlternativo: '' },
    { titulo: '', descricao: '', imagem: '', textoAlternativo: '' },
    { titulo: '', descricao: '', imagem: '', textoAlternativo: '' },
    { titulo: '', descricao: '', imagem: '', textoAlternativo: '' }
];

let etapaAtual = 0;
const conteudo = document.getElementById('conteudo');
const imagem = document.getElementById('imagem-etapa');
const voltar = document.getElementById('voltar');
const proximo = document.getElementById('proximo');
const indicadores = document.querySelectorAll('[data-etapa]');

function mostrarEtapa(numero) {
    etapaAtual = numero;
    const etapa = etapas[etapaAtual];
    const ultimaEtapa = etapaAtual === etapas.length - 1;

    document.getElementById('titulo-etapa').textContent = etapa.titulo;
    document.getElementById('descricao-etapa').textContent = etapa.descricao;
    document.getElementById('etapa-atual').textContent = `Etapa ${etapaAtual + 1} de ${etapas.length}`;

    if (etapa.imagem) {
        imagem.src = etapa.imagem;
        imagem.alt = etapa.textoAlternativo;
        imagem.hidden = false;
    } else {
        imagem.hidden = true;
        imagem.removeAttribute('src');
        imagem.alt = '';
    }

    voltar.hidden = etapaAtual === 0;
    proximo.textContent = ultimaEtapa ? 'Concluir' : etapaAtual === 0 ? 'Saiba mais' : 'Próximo';
    proximo.classList.toggle('botao-concluir', ultimaEtapa);

    indicadores.forEach((indicador, indice) => {
        if (indice === etapaAtual) {
            indicador.setAttribute('aria-current', 'step');
        } else {
            indicador.removeAttribute('aria-current');
        }
    });

    conteudo.scrollTop = 0;
}

voltar.addEventListener('click', () => {
    if (etapaAtual > 0) mostrarEtapa(etapaAtual - 1);
});

proximo.addEventListener('click', () => {
    if (etapaAtual < etapas.length - 1) {
        mostrarEtapa(etapaAtual + 1);
    } else {
        location.href = '../../index.html';
    }
});

indicadores.forEach((indicador) => {
    indicador.addEventListener('click', () => mostrarEtapa(Number(indicador.dataset.etapa)));
});

mostrarEtapa(0);
