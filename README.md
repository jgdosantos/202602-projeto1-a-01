# Redução Churn Bulbe

> Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026
> Cliente: **Bulbe Energia** · Turma **A** · Squad **01**

Aplicação web que acompanha o cliente novo da Bulbe da adesão ao pagamento da primeira fatura.

---

## 1. Problema

- **Dor escolhida:** clientes que não pagam ou não entendem a 1ª fatura da Bulbe (inadimplência)
- **Evidência:** A queda do robô da Cemig atrasou a qualificação, e a 1ª fatura passou a chegar muito tempo depois da adesão
- **Indicador que a solução pretende mover:** pagamento da 1ª fatura, melhora na comunicação com o cliente e diminui inadimplência

## 2. Persona e jornada

- **Persona escolhida:** Helena Martins, 46 anos, Contagem (MG), auxiliar administrativa. Cliente PF no primeiro mês de Bulbe. Aderiu pelo celular para economizar e precisa entender a conexão, a primeira fatura e a relação com a conta da Cemig. Persona fictícia.
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
