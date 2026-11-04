# resume-structure Specification

## Purpose
Configuração visual do currículo: template, cor de tema, layout das seções e idioma dos títulos.

## Requirements
### Requirement: Templates
O sistema MUST oferecer os templates `eevee`, `onix`, `kicks` e `ditto`, trocáveis a qualquer momento.

#### Scenario: Trocar template
- **WHEN** o usuário seleciona outro template
- **THEN** o preview passa a usar o template escolhido mantendo o conteúdo

### Requirement: Cor de tema
O sistema MUST permitir escolher a cor de tema aplicada pelo template.

#### Scenario: Trocar cor
- **WHEN** o usuário escolhe outra cor
- **THEN** o preview é atualizado com a nova cor

### Requirement: Layout das seções
O sistema MUST permitir mover e reordenar seções entre a área principal (`mainSections`) e a lateral (`sidebarSections`) por drag and drop.

#### Scenario: Mover seção para a lateral
- **WHEN** o usuário arrasta "Habilidades" para a lista lateral
- **THEN** o template renderiza a seção na coluna lateral

### Requirement: Idioma do currículo
O sistema MUST suportar os idiomas inglês, espanhol, francês, alemão, italiano e português, usados nos títulos das seções.

#### Scenario: Trocar idioma
- **WHEN** o usuário seleciona "Inglês"
- **THEN** os títulos das seções no preview passam a ser exibidos em inglês
