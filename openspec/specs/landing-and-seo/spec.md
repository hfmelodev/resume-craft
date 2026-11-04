# landing-and-seo Specification

## Purpose
Página pública de apresentação do produto em `/` e metadados de SEO/PWA (títulos, Open Graph, robots, sitemap e manifest), mantendo a área logada fora da indexação.

## Requirements
### Requirement: Landing page pública
A rota `/` MUST renderizar a landing page estática com header, hero, recursos, modelos, IA, como funciona, preços, FAQ, CTA final e rodapé. As seções MUST expor as âncoras `#recursos`, `#modelos`, `#ia`, `#como-funciona`, `#precos` e `#faq`, usadas pela navegação do header.

#### Scenario: Visitante abre a página inicial
- **WHEN** um visitante sem sessão acessa `/`
- **THEN** vê a landing page completa, sem exigir login

#### Scenario: Navegação por âncora
- **WHEN** o visitante clica em "Preços" no header
- **THEN** a página rola suavemente até a seção `#precos`, sem ficar escondida atrás do header fixo

### Requirement: Chamadas para ação
Todo botão de início da landing ("Entrar", "Começar grátis" e similares) MUST apontar para `/auth/login`, que já redireciona usuários logados para `/dashboard/resumes`.

#### Scenario: Usuário logado clica em começar
- **WHEN** um usuário com sessão clica em um CTA da landing
- **THEN** é levado ao `/auth/login` e redirecionado para `/dashboard/resumes`

### Requirement: Logo leva à página inicial
O logo no login, na sidebar do dashboard e na navegação mobile MUST ser um link para `/`.

#### Scenario: Clique no logo do dashboard
- **WHEN** o usuário clica no logo da sidebar do dashboard
- **THEN** é levado para `/`

### Requirement: Metadados de SEO
O layout raiz MUST definir `metadataBase` a partir de `NEXT_PUBLIC_APP_URL`, título com template `%s | Resume Craft`, descrição, palavras-chave, Open Graph (`pt_BR`) e Twitter card com imagem. As páginas MUST definir títulos próprios: `Entrar`, `Currículos`, `Minha conta`, o título do currículo no editor e `Página não encontrada`.

#### Scenario: Título do editor
- **WHEN** o dono abre `/dashboard/resumes/[id]`
- **THEN** a aba mostra `<título do currículo> | Resume Craft`

#### Scenario: Currículo de outro usuário
- **WHEN** um usuário abre o editor com o id de um currículo que não é dele
- **THEN** o título usa o fallback `Currículo`, sem expor o título real, pois `getResumeById` filtra pelo dono

### Requirement: Área logada fora da indexação
O dashboard MUST declarar `robots: { index: false, follow: false }`. O `robots.txt` MUST bloquear `/dashboard/` e `/api/` e apontar para o sitemap. O `sitemap.xml` MUST listar somente as páginas públicas `/` e `/auth/login`.

#### Scenario: Buscador lê o robots.txt
- **WHEN** um crawler acessa `/robots.txt`
- **THEN** recebe `Disallow` para `/dashboard/` e `/api/` e a URL absoluta de `/sitemap.xml`

### Requirement: Manifest e ícones
O app MUST servir `/manifest.webmanifest` em `pt-BR`, com `display: standalone`, `start_url` em `/dashboard/resumes` e ícones 192, 512 e maskable 512 em `public/icons/`, além de `apple-icon.png`. O viewport MUST definir `themeColor` para os modos claro e escuro.

#### Scenario: Instalação como app
- **WHEN** o usuário instala o site pelo navegador
- **THEN** o app abre em modo standalone direto na lista de currículos
