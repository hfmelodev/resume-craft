# resume-management Specification

## Purpose
Listagem, criação, duplicação, exclusão e leitura de currículos do usuário, sempre isolados por dono.

## Requirements
### Requirement: Isolamento por dono
Toda leitura e escrita de currículo MUST filtrar por `userId` da sessão, impedindo acesso a currículos de outros usuários.

#### Scenario: Acesso a currículo de outro usuário
- **WHEN** um usuário abre `/dashboard/resumes/<id>` de um currículo que não é seu
- **THEN** o currículo é tratado como inexistente

#### Scenario: Id inválido
- **WHEN** o `id` da rota não é um UUID válido
- **THEN** o currículo é tratado como inexistente, sem erro do Postgres

### Requirement: Listagem
O sistema MUST listar em `/dashboard/resumes` todos os currículos do usuário logado.

#### Scenario: Usuário com currículos
- **WHEN** o usuário acessa `/dashboard/resumes`
- **THEN** vê um card por currículo e o botão para criar um novo

### Requirement: Criação com título único
O sistema MUST criar currículos com título informado e MUST rejeitar título repetido para o mesmo usuário.

#### Scenario: Título repetido
- **WHEN** o usuário cria um currículo com um título que já possui
- **THEN** recebe o erro "Você já possui um currículo com esse título."

### Requirement: Duplicação
O sistema MUST duplicar um currículo copiando seu `data` para um novo registro com título novo e único.

#### Scenario: Duplicar currículo
- **WHEN** o usuário duplica um currículo informando um título inédito
- **THEN** um novo currículo é criado com o mesmo conteúdo e estrutura

### Requirement: Exclusão
O sistema MUST excluir um currículo do usuário após confirmação em diálogo.

#### Scenario: Excluir currículo
- **WHEN** o usuário confirma a exclusão
- **THEN** o currículo é removido e a listagem é revalidada
