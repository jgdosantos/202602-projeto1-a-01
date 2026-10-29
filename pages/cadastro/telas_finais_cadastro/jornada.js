const chaveCadastro = 'bulbe-jornada';
const campos = {
    nome: document.getElementById('nome'),
    titularidade: document.getElementById('titularidade'),
    cpf: document.getElementById('cpf'),
    email: document.getElementById('email-cadastro'),
    telefone: document.getElementById('telefone')
};

let dados = { semana: 2, canal: 'WhatsApp' };
let voltarParaRevisao = false;

try {
    const salvos = JSON.parse(sessionStorage.getItem(chaveCadastro) || '{}');
    if (salvos && typeof salvos === 'object') {
        dados = { ...dados, ...salvos };
    }
} catch {
    // O formulário continua funcionando se o navegador bloquear o armazenamento.
}

Object.entries(campos).forEach(([nome, campo]) => {
    if (typeof dados[nome] === 'string') {
        campo.value = dados[nome];
    }
});

if (![1, 2, 3, 4].includes(Number(dados.semana))) dados.semana = 2;
if (!['WhatsApp', 'E-mail', 'SMS'].includes(dados.canal)) dados.canal = 'WhatsApp';

function salvar() {
    Object.entries(campos).forEach(([nome, campo]) => {
        dados[nome] = campo.value.trim();
    });

    try {
        sessionStorage.setItem(chaveCadastro, JSON.stringify(dados));
    } catch {
        // Os dados permanecem na memória durante esta navegação.
    }
}

campos.cpf.addEventListener('input', () => {
    const numeros = campos.cpf.value.replace(/\D/g, '').slice(0, 11);
    campos.cpf.value = numeros
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1-$2');
});

campos.telefone.addEventListener('input', () => {
    const numeros = campos.telefone.value.replace(/\D/g, '').slice(0, 11);
    const tamanho = numeros.length > 10 ? 5 : 4;
    let telefone = numeros;

    if (numeros.length > 2) telefone = `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    if (numeros.length > 2 + tamanho) {
        telefone = `(${numeros.slice(0, 2)}) ${numeros.slice(2, 2 + tamanho)}-${numeros.slice(2 + tamanho)}`;
    }

    campos.telefone.value = telefone;
});

Object.values(campos).forEach((campo) => {
    campo.addEventListener('input', salvar);
    campo.addEventListener('change', salvar);
});

const etapas = {
    cadastro: { nome: 'Seus dados', percentual: 25 },
    recebimento: { nome: 'Recebimento da conta', percentual: 50 },
    comunicacao: { nome: 'Comunicação', percentual: 75 },
    confirmacao: { nome: 'Confirmação', percentual: 100 },
    concluido: { nome: 'Cadastro concluído', percentual: 100 }
};

function escolherSemana(numero) {
    dados.semana = Number(numero);
    document.querySelectorAll('[data-semana]').forEach((botao) => {
        botao.setAttribute('aria-pressed', String(Number(botao.dataset.semana) === dados.semana));
    });
    document.getElementById('numero-semana').textContent = `${dados.semana}ª`;
    document.getElementById('texto-semana').textContent = `${dados.semana}ª semana de cada mês`;
}

document.querySelectorAll('[data-semana]').forEach((botao) => {
    botao.addEventListener('click', () => {
        escolherSemana(botao.dataset.semana);
        salvar();
    });
});

const canais = document.querySelectorAll('input[name="canal"]');
canais.forEach((canal) => {
    canal.checked = canal.value === dados.canal;
    canal.addEventListener('change', () => {
        dados.canal = canal.value;
        salvar();
    });
});
escolherSemana(dados.semana);

function atualizarRevisao() {
    Object.keys(campos).forEach((nome) => {
        document.getElementById(`revisao-${nome}`).textContent = dados[nome] || '';
    });
    document.getElementById('revisao-semana').textContent = `${dados.semana}ª semana de cada mês`;
    document.getElementById('revisao-canal').textContent = dados.canal;
    document.getElementById('conferi-dados').checked = false;
    document.getElementById('finalizar-cadastro').disabled = true;
}

function mostrarTela() {
    const rota = location.hash.slice(1) || 'inicio';
    const etapa = etapas[rota];

    if (['recebimento', 'comunicacao', 'confirmacao'].includes(rota) && !document.getElementById('form-dados').checkValidity()) {
        location.replace('#cadastro');
        return;
    }
    if (rota === 'concluido' && !dados.concluido) {
        location.replace('#cadastro');
        return;
    }

    document.getElementById('tela-inicial').hidden = Boolean(etapa) || rota === 'sem-conta';
    document.getElementById('tela-sem-conta').hidden = rota !== 'sem-conta';
    document.getElementById('jornada').hidden = !etapa;
    document.querySelectorAll('[id^="passo-"]').forEach((secao) => {
        secao.hidden = secao.id !== `passo-${rota}`;
    });

    if (etapa) {
        const anteriores = { cadastro: 'sem-conta', recebimento: 'cadastro', comunicacao: 'recebimento', confirmacao: 'comunicacao', concluido: 'inicio' };
        document.getElementById('voltar-etapa').href = `#${anteriores[rota]}`;
        document.getElementById('nome-etapa').textContent = etapa.nome;
        document.getElementById('percentual-etapa').textContent = `${etapa.percentual}%`;
        const barra = document.getElementById('barra-progresso');
        barra.setAttribute('aria-valuenow', etapa.percentual);
        barra.querySelector('span').style.width = `${etapa.percentual}%`;
        document.title = `${etapa.nome} | Bulbe`;
        if (rota === 'confirmacao') atualizarRevisao();
        document.querySelector(`#passo-${rota} h1`).focus({ preventScroll: true });
    } else if (rota === 'sem-conta') {
        document.title = 'Crie sua conta | Bulbe';
        document.getElementById('titulo-sem-conta').focus({ preventScroll: true });
    } else {
        document.title = 'Bem-vindo | Bulbe';
    }

    document.querySelectorAll('.cartao-jornada, .conteudo-acesso, .app--acesso').forEach((area) => {
        area.scrollTop = 0;
    });
}

function avancar(proximaEtapa) {
    salvar();
    location.hash = voltarParaRevisao ? 'confirmacao' : proximaEtapa;
    voltarParaRevisao = false;
}

document.getElementById('form-dados').addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!evento.currentTarget.reportValidity()) return;
    dados.concluido = false;
    avancar('recebimento');
});

document.getElementById('confirmar-semana').addEventListener('click', () => avancar('comunicacao'));

document.getElementById('form-canal').addEventListener('submit', (evento) => {
    evento.preventDefault();
    avancar('confirmacao');
});

document.querySelectorAll('[data-editar]').forEach((link) => {
    link.addEventListener('click', () => { voltarParaRevisao = true; });
});

document.querySelectorAll('.voltar-jornada').forEach((link) => {
    link.addEventListener('click', () => { voltarParaRevisao = false; });
});

document.getElementById('voltar-etapa').addEventListener('click', () => { voltarParaRevisao = false; });

document.getElementById('conferi-dados').addEventListener('change', (evento) => {
    document.getElementById('finalizar-cadastro').disabled = !evento.target.checked;
});

document.getElementById('form-confirmacao').addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!evento.currentTarget.reportValidity()) return;
    dados.concluido = true;
    try {
        sessionStorage.setItem(chaveCadastro, JSON.stringify({ concluido: true }));
    } catch {
        // A confirmação local também funciona sem armazenamento.
    }
    location.hash = 'concluido';
});

window.addEventListener('hashchange', mostrarTela);
mostrarTela();
