# [Redução Churn Bulbe]

> Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026
> Cliente: **Bulbe Energia** · Turma **[A]** · Squad **[01]**

[Uma frase que resume a solução: o que ela faz e para quem. Exemplo: "Painel que acompanha o cliente novo da Bulbe da adesão ao pagamento da primeira fatura."]

---

## 1. Problema

- **Dor escolhida:** clientes que não pagam ou não entendem a 1ª fatura da Bulbe (inadinplencia)
- **Evidência:** A queda do robô da Cemig atrasou a qualificação, e a 1ª fatura passou a chegar muito tempo depois da adesão
- **Indicador que a solução pretende mover:** pagamento da 1ª fatura, melhora na comunicação com o cliente e diminui inadinplencia

## 2. Persona e jornada

- **Persona:** Rafael Souza, 34 anos, Belo Horizonte. Analista administrativo, casado, duas crianças. Aderiu à Bulbe por um anúncio no Instagram atraído pela promessa de economizar na conta de luz. É digital, resolve tudo pelo celular, mas tem pouca paciência pra ler termos e detalhes. Quando a primeira fatura da Bulbe chegou junto com a conta da Cemig, ficou confuso "por que estou pagando duas contas se era pra economizar?" e, na dúvida, não pagou a Bulbe.
**Persona 2:** Persona: Sandra
Sandra, 52 anos · Juiz de Fora (MG) · dona de um pequeno salão de beleza (CPF, residência própria) · Cliente PF, 1º mês de Bulbe
	• Contexto: Aderiu depois de ver uma propaganda e de uma cliente do salão comentar que estava pagando menos. Fez o cadastro pelo celular com a ajuda da filha. Paga cerca de R$ 420 de luz por mês, e a conta da casa pesa no orçamento.
	• Objetivo: Pagar menos pela energia sem ter que aprender nada novo e sem perder o controle das contas.
	• Medos e dúvidas: "Isso é golpe?", "Vou pagar duas contas?", "Quem é esse número que me mandou mensagem?", "Se eu não pagar, cortam minha luz?"
	• Canais: Usa WhatsApp, mas bloqueia números desconhecidos depois de quase cair em golpes. Atende ligação, mas quase não abre e-mail. Não baixou o app. Prefere pagar boleto e ainda não confia no PIX para valores altos.
- **Mapa de jornada:** [docs/jornada.md](docs/jornada.md)

## 3. Solução

[Descrição curta da solução e das principais telas.]

| Tela | O que faz | História relacionada |
| --- | --- | --- |
| [Início] | [ ] | [HU01] |
| [ ] | [ ] | [ ] |

- **Histórias de usuário:** [docs/historias1.md](docs/historias1.md)
- **Wireframes:** [docs/wireframes/](docs/wireframes/)

## 4. Tecnologias

- HTML, CSS e JavaScript puro (vanilla)
- Dados fictícios em JSON, lidos com `fetch` (pasta [`data/`](data/))
- Git e GitHub (Issues, Projects e Pull Requests)

## 5. Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/jgdosantos/202602-projeto1-a-01
   ```
2. Abra a pasta no VS Code.
3. Instale a extensão **Live Server** (o VS Code vai sugerir automaticamente).
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

> Abrir o `index.html` direto no navegador (duplo clique) não funciona: o `fetch` dos arquivos JSON exige um servidor.

## 6. Estrutura do repositório

```
├── index.html            # Página inicial
├── pages/                # Demais telas da solução
├── assets/
│   ├── css/style.css     # Estilos
│   ├── js/main.js        # Lógica da página inicial
│   ├── js/api.js         # Leitura dos dados (fetch)
│   └── img/              # Imagens e ícones
├── data/                 # Dados fictícios em JSON
├── docs/                 # Jornada, histórias, wireframes e sprints
└── .github/              # Modelos de Issue e de Pull Request
```

## 7. Quadro do projeto

- **GitHub Projects:** [link para o quadro do squad]

## 8. Equipe

| Integrante | GitHub | Papel principal |
| --- | --- | --- |
| [Nome] | [@usuario](https://github.com/usuario) | [ex.: Scrum Master, front-end, dados, documentação] |
| [Nome] | [@usuario](https://github.com/usuario) | [ ] |
| [Nome] | [@usuario](https://github.com/usuario) | [ ] |

## 9. Entregas

| Marco | Aula | Status |
| --- | --- | --- |
| Mapa de jornada | 19 | [ ] |
| Histórias de usuário | 20 | [ ] |
| Wireframes | 21–23 | [ ] |
| Sprint Review I | 24 | [ ] |
| Implementação | 25–28 | [ ] |
| Sprint Review II | 29 | [ ] |
| Versão final | 30 | [ ] |

---

> Todos os dados deste repositório são fictícios. Nenhum dado real de cliente da Bulbe Energia é utilizado.
