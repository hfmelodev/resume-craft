# ai-generation Specification

## Purpose
Geração e melhoria de conteúdo do currículo com OpenAI, retornando JSON aplicado ao formulário.

## Requirements
### Requirement: Gerar a partir do cargo
O sistema MUST gerar `summary`, `headline` e `skills` a partir de um título de vaga e descrição opcional via `POST /api/generate/job-title`.

#### Scenario: Gerar conteúdo para uma vaga
- **WHEN** o usuário informa o título da vaga e confirma
- **THEN** resumo, headline e habilidades são preenchidos com o conteúdo gerado

### Requirement: Melhorar conteúdo
O sistema MUST reescrever o conteúdo do currículo de forma mais clara e profissional, corrigindo gramática e preservando dados pessoais, links e emails, via `POST /api/generate/fix-content`.

#### Scenario: Melhorar textos
- **WHEN** o usuário aciona "melhorar conteúdo"
- **THEN** os textos são substituídos pela versão revisada sem alterar dados de contato

### Requirement: Traduzir conteúdo
O sistema MUST traduzir os valores do conteúdo para o idioma escolhido, mantendo as chaves do JSON, via `POST /api/generate/translate`, e MUST atualizar `structure.language`.

#### Scenario: Traduzir para espanhol
- **WHEN** o usuário escolhe espanhol e confirma
- **THEN** o conteúdo é traduzido e o idioma do currículo passa a ser espanhol

### Requirement: Tratamento de erros da IA
As rotas de geração MUST retornar mensagem amigável quando a resposta não for JSON válido ou a OpenAI falhar (429 limite esgotado, 401 chave inválida).

#### Scenario: Limite da OpenAI esgotado
- **WHEN** a OpenAI responde 429
- **THEN** a rota responde 429 com "Limite de uso ou créditos da OpenAI esgotados."
