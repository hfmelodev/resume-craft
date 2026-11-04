# authentication Specification

## Purpose
Autenticação de usuários via OAuth (GitHub e Google) com Auth.js, sessão JWT e proteção das rotas do dashboard.

## Requirements
### Requirement: Login via OAuth
O sistema MUST permitir login com GitHub ou Google na página `/auth/login`, persistindo usuário e conta pelo DrizzleAdapter.

#### Scenario: Primeiro login
- **WHEN** um visitante conclui o OAuth com GitHub ou Google pela primeira vez
- **THEN** o usuário é criado na tabela `user` com `credits` igual a 0 e a conta é vinculada em `account`

### Requirement: Sessão JWT
O sistema MUST manter a sessão em cookie JWT e expor `session.user.id` a partir de `token.sub`.

#### Scenario: Leitura da sessão no servidor
- **WHEN** um DAL ou server action chama `getSession()`/`auth()`
- **THEN** recebe a sessão com `user.id` sem consultar a tabela `session`

### Requirement: Proteção de rotas
O sistema MUST exigir sessão para `/dashboard/*` e MUST redirecionar usuários logados que acessam `/auth/*` para `/dashboard/resumes`.

#### Scenario: Visitante acessa o dashboard
- **WHEN** um usuário sem sessão acessa `/dashboard/resumes`
- **THEN** é redirecionado para `/auth/login`

#### Scenario: Usuário logado acessa o login
- **WHEN** um usuário com sessão acessa `/auth/login`
- **THEN** é redirecionado para `/dashboard/resumes`

### Requirement: Vinculação de contas por e-mail
O provider Google MUST vincular a conta OAuth ao usuário já existente com o mesmo e-mail (`allowDangerousEmailAccountLinking`), pois o Google entrega e-mail verificado. O provider GitHub MUST NOT vincular por e-mail, porque pode entregar e-mail primário não verificado.

#### Scenario: Login com Google após GitHub
- **WHEN** um usuário criado via GitHub entra com uma conta Google do mesmo e-mail
- **THEN** a conta Google é vinculada ao mesmo usuário em `account`, sem erro `OAuthAccountNotLinked`

#### Scenario: Login com GitHub após Google
- **WHEN** um usuário criado via Google entra com uma conta GitHub do mesmo e-mail
- **THEN** o login é recusado com `OAuthAccountNotLinked`
