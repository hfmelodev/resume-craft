# resume-editor Specification

## Purpose
Editor do conteúdo do currículo com preview ao vivo e salvamento automático.

## Requirements
### Requirement: Seções de conteúdo
O editor MUST permitir editar foto, informações básicas (nome, headline, email, site, telefone, localização), resumo em rich text (Tiptap) e as seções múltiplas: redes sociais, experiências, educação, habilidades, idiomas, certificações e projetos.

#### Scenario: Adicionar item em seção múltipla
- **WHEN** o usuário adiciona uma experiência pelo diálogo da seção
- **THEN** o item aparece na lista da seção e no preview

### Requirement: Reordenação de itens
O editor MUST permitir reordenar itens de seções múltiplas por drag and drop.

#### Scenario: Reordenar experiências
- **WHEN** o usuário arrasta uma experiência para outra posição
- **THEN** a nova ordem é refletida no preview

### Requirement: Salvamento automático
O editor MUST salvar `ResumeData` automaticamente via `updateResumeData` com debounce de 1 segundo, sem salvar quando nada mudou.

#### Scenario: Edição contínua
- **WHEN** o usuário para de digitar por 1 segundo
- **THEN** os dados são persistidos uma única vez

### Requirement: Preview com zoom
O preview MUST renderizar o template escolhido com controles de zoom e arraste.

#### Scenario: Aproximar o preview
- **WHEN** o usuário usa os controles de zoom
- **THEN** o preview do currículo é ampliado ou reduzido

### Requirement: Layout responsivo
O editor MUST funcionar em desktop, tablet e mobile, com navegação adaptada em telas menores.

#### Scenario: Acesso pelo celular
- **WHEN** o usuário abre o editor em uma tela de celular
- **THEN** consegue alternar entre conteúdo, preview e estrutura
