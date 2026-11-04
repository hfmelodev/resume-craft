# pdf-export Specification

## Purpose
Exportação do currículo renderizado para PDF A4 no servidor.

## Requirements
### Requirement: Gerar PDF
`POST /api/resume/download` MUST receber o HTML e a estrutura do currículo, renderizar com Tailwind em um Chromium headless e retornar um PDF A4 com fundo.

#### Scenario: Download do currículo
- **WHEN** o usuário clica em baixar PDF
- **THEN** recebe um arquivo `application/pdf` fiel ao preview

#### Scenario: Requisição sem HTML
- **WHEN** a requisição não traz `html` ou `structure`
- **THEN** a rota responde 400 com "HTML do currículo obrigatório."

### Requirement: Exigir login
`POST /api/resume/download` MUST responder 401 sem abrir o Chromium quando não houver sessão autenticada.

#### Scenario: Requisição sem login
- **WHEN** uma requisição chega sem sessão válida
- **THEN** a rota responde 401 com "Você precisa estar logado para baixar o currículo." e nenhum navegador é iniciado

### Requirement: Ambiente de execução
A rota MUST usar `@sparticuz/chromium` na Vercel e o Chrome do `puppeteer` localmente, e MUST fechar o navegador mesmo em caso de erro.

#### Scenario: Falha na geração
- **WHEN** ocorre um erro durante a renderização
- **THEN** a rota responde 500 e o processo do Chromium é encerrado
