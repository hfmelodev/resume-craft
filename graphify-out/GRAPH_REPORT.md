# Graph Report - resume-craft  (2026-11-04)

## Corpus Check
- 167 files · ~44,106 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 948 nodes · 2017 edges · 66 communities (44 shown, 22 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2c424f4d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- lucide-react
- puppeteer-core
- resume/index.tsx
- resume-content/header.tsx
- eevee.tsx
- shadcn/ui
- Button
- Button
- dependencies
- package.json
- components.json
- translate.tsx
- Requirements
- react
- compilerOptions
- types.d.ts
- rules
- button.tsx
- scripts
- biome.json
- useSortedClasses
- formatter
- Requirements
- allowBuilds
- assist
- formatter
- suspicious
- vcs
- author
- AGENTS.md
- CLAUDE.md
- Requirements
- { GET, POST }
- auth.ts
- Requirements
- resume-card.tsx
- Requirements
- translate.tsx
- openspec-explore/SKILL.md
- Requirements
- explore.md
- pdf-export Specification
- rules
- react
- Resume Craft
- postgres
- api.ts
- Button
- stripe
- react-dom@19.3.0
- react-icons
- @tiptap/extension-text-align
- react-resizable-panels
- @sparticuz/chromium
- @tiptap/pm@^3.32.0
- @tiptap/starter-kit
- tw-animate-css@^1.4.0

## God Nodes (most connected - your core abstractions)
1. `Button()` - 58 edges
2. `react` - 49 edges
3. `lucide-react` - 45 edges
4. `next` - 36 edges
5. `cn` - 28 edges
6. `react-hook-form` - 24 edges
7. `Dialog()` - 18 edges
8. `ThemeToggle()` - 17 edges
9. `shadcn/ui` - 17 edges
10. `getSession` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Composition recipes` --references--> `Badge()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/badge.tsx
- `Reach for this first` --references--> `Badge()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/badge.tsx
- `Reach for this first` --references--> `Button()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/button.tsx
- `Reach for this first` --references--> `Input()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/input/index.tsx
- `Reach for this first` --references--> `Label()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/label.tsx

## Import Cycles
- None detected.

## Communities (66 total, 22 thin omitted)

### Community 0 - "lucide-react"
Cohesion: 0.09
Nodes (29): nextConfig, next, metadata, Home(), metadata, aiActions, AISection(), START_HREF (+21 more)

### Community 2 - "resume/index.tsx"
Cohesion: 0.12
Nodes (26): launchBrowser(), POST(), DashboardResumePage(), generateMetadata(), ResumeLoader(), ResumeLoaderProps, DesktopEditor(), EditorLayoutProps (+18 more)

### Community 3 - "resume-content/header.tsx"
Cohesion: 0.17
Nodes (16): react-zoom-pan-pinch@^4.2.0, react-zoom-pan-pinch, TransformControls(), TransformControlsProps, DuplicateResumeDialog(), NavigationHeader(), NavigationHeaderProps, ResumeContent() (+8 more)

### Community 4 - "eevee.tsx"
Cohesion: 0.14
Nodes (29): Element(), ElementProps, Ditto(), Eevee(), SectionHeading(), SectionHeadingProps, BaseResumeProps, ResumeTemplateProps (+21 more)

### Community 5 - "shadcn/ui"
Cohesion: 0.06
Nodes (34): 1. Define registry.json, 2. Build, 3. Consume, Add Components, Avatar Has No `size` Prop, Base UI Support (January 2026), Build (Custom Registry), Building a Custom Registry (+26 more)

### Community 6 - "Button"
Cohesion: 0.22
Nodes (13): DeleteResumeDialog(), Dialog(), DialogProps, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader() (+5 more)

### Community 7 - "Button"
Cohesion: 0.06
Nodes (43): Anti-patterns to avoid, Composition recipes, Default aesthetic for product UI, Design Direction for shadcn on Vercel, Reach for this first, LoginPage(), handleLogin(), metadata (+35 more)

### Community 8 - "dependencies"
Cohesion: 0.08
Nodes (24): dependencies, axios@^1.21.0, canvas-confetti@^1.9.4, class-variance-authority@^0.7.1, date-fns@^4.4.0, @hello-pangea/dnd@^18.0.1, @hookform/resolvers@^5.9.2, lucide-react@^1.58.0 (+16 more)

### Community 9 - "package.json"
Cohesion: 0.09
Nodes (29): devDependencies, babel-plugin-react-compiler@1.0.0, @biomejs/biome@2.5.15, drizzle-kit@^0.31.11, puppeteer@25.11.0, @svgr/webpack@^8.1.0, tailwindcss@^4, @tailwindcss/turbopack@^4 (+21 more)

### Community 10 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 11 - "translate.tsx"
Cohesion: 0.09
Nodes (34): radix-ui@^1.8.1, lucide-react, radix-ui, react-hook-form, GenerationTranslate(), InfosSidebar(), SectionTitle(), SectionTitleProps (+26 more)

### Community 12 - "Requirements"
Cohesion: 0.07
Nodes (27): ai-credits Specification, Purpose, Requirement: Checkout, Requirement: Crédito da compra, Requirement: Débito por geração, Requirement: Histórico de transações, Requirement: Idempotência, Requirement: Pacotes de créditos (+19 more)

### Community 13 - "react"
Cohesion: 0.06
Nodes (44): cn@^0.5.0, @tiptap/react@^3.32.0, cn, react, @tiptap/react, MultipleDragItemData, MultipleDragList(), MultipleDragListProps (+36 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 15 - "types.d.ts"
Cohesion: 0.06
Nodes (30): Purpose, Requirement: Layout responsivo, Requirement: Preview com zoom, Requirement: Reordenação de itens, Requirement: Salvamento automático, Requirement: Seções de conteúdo, Requirements, resume-editor Specification (+22 more)

### Community 16 - "rules"
Cohesion: 0.18
Nodes (11): noUnknownProperty, linter, enabled, rules, complexity, correctness, preset, style (+3 more)

### Community 17 - "button.tsx"
Cohesion: 0.20
Nodes (8): @hookform/resolvers, DuplicateResumeDialogData, DuplicateResumeDialogProps, DuplicateResumeDialogSchema, NewResumeDialogData, NewResumeDialogSchema, buttonVariants, ButtonVariants

### Community 18 - "scripts"
Cohesion: 0.17
Nodes (12): scripts, build, db:generate, db:migrate, db:push, db:studio, db:sync, dev (+4 more)

### Community 19 - "biome.json"
Cohesion: 0.22
Nodes (8): css, parser, files, ignoreUnknown, includes, javascript, tailwindDirectives, $schema

### Community 20 - "useSortedClasses"
Cohesion: 0.29
Nodes (7): useSortedClasses, attributes, functions, nursery, fix, level, options

### Community 21 - "formatter"
Cohesion: 0.33
Nodes (6): arrowParentheses, jsxQuoteStyle, quoteStyle, semicolons, trailingCommas, formatter

### Community 22 - "Requirements"
Cohesion: 0.13
Nodes (14): Purpose, Requirement: Criação com título único, Requirement: Duplicação, Requirement: Exclusão, Requirement: Isolamento por dono, Requirement: Listagem, Requirements, resume-management Specification (+6 more)

### Community 23 - "allowBuilds"
Cohesion: 0.33
Nodes (5): allowBuilds, esbuild, puppeteer, sharp, unrs-resolver

### Community 24 - "assist"
Cohesion: 0.40
Nodes (5): source, assist, actions, enabled, organizeImports

### Community 25 - "formatter"
Cohesion: 0.40
Nodes (5): formatter, enabled, indentStyle, indentWidth, lineWidth

### Community 26 - "suspicious"
Cohesion: 0.40
Nodes (5): suspicious, noArrayIndexKey, noExplicitAny, noShadowRestrictedNames, noUnknownAtRules

### Community 27 - "vcs"
Cohesion: 0.50
Nodes (4): vcs, clientKind, enabled, useIgnoreFile

### Community 28 - "author"
Cohesion: 0.50
Nodes (4): author, email, name, url

### Community 31 - "Requirements"
Cohesion: 0.11
Nodes (17): landing-and-seo Specification, Purpose, Requirement: Chamadas para ação, Requirement: Landing page pública, Requirement: Logo leva à página inicial, Requirement: Manifest e ícones, Requirement: Metadados de SEO, Requirement: Área logada fora da indexação (+9 more)

### Community 34 - "auth.ts"
Cohesion: 0.08
Nodes (42): drizzle-orm@^0.45.4, next-auth@5.0.0-beta.32, Funcionalidades, drizzle-orm, next-auth, openai, zod, POST() (+34 more)

### Community 35 - "Requirements"
Cohesion: 0.17
Nodes (11): ai-generation Specification, Purpose, Requirement: Gerar a partir do cargo, Requirement: Melhorar conteúdo, Requirement: Traduzir conteúdo, Requirement: Tratamento de erros da IA, Requirements, Scenario: Gerar conteúdo para uma vaga (+3 more)

### Community 36 - "resume-card.tsx"
Cohesion: 0.20
Nodes (12): DashboardResumesPage(), metadata, SkeletonResumesListFallback(), AddResumeButton(), NewResumeDialog(), ResumeCard(), ResumeCardButton(), ResumeCardButtonProps (+4 more)

### Community 37 - "Requirements"
Cohesion: 0.17
Nodes (11): Purpose, Requirement: Cor de tema, Requirement: Idioma do currículo, Requirement: Layout das seções, Requirement: Templates, Requirements, resume-structure Specification, Scenario: Mover seção para a lateral (+3 more)

### Community 38 - "translate.tsx"
Cohesion: 0.14
Nodes (17): mergician, sonner, @tanstack/react-query, GenerationToFixContent(), GenerationToFixContentProps, GenerationDialogProps, GenerationData, GenerationFromJobTitle() (+9 more)

### Community 39 - "openspec-explore/SKILL.md"
Cohesion: 0.18
Nodes (10): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, The Stance, What You Don't Have To Do, What You Might Do (+2 more)

### Community 40 - "Requirements"
Cohesion: 0.14
Nodes (13): authentication Specification, Purpose, Requirement: Login via OAuth, Requirement: Proteção de rotas, Requirement: Sessão JWT, Requirement: Vinculação de contas por e-mail, Requirements, Scenario: Leitura da sessão no servidor (+5 more)

### Community 41 - "explore.md"
Cohesion: 0.20
Nodes (9): Check for context, Ending Discovery, Guardrails, OpenSpec Awareness, The Stance, What You Don't Have To Do, What You Might Do, When a change exists (+1 more)

### Community 42 - "pdf-export Specification"
Cohesion: 0.18
Nodes (10): pdf-export Specification, Purpose, Requirement: Ambiente de execução, Requirement: Exigir login, Requirement: Gerar PDF, Requirements, Scenario: Download do currículo, Scenario: Falha na geração (+2 more)

### Community 43 - "rules"
Cohesion: 0.29
Nodes (6): context, rules, proposal, specs, tasks, schema

### Community 44 - "react"
Cohesion: 0.13
Nodes (17): Wrapping with TooltipProvider, next-themes@^0.4.6, next-themes, geistMono, geistSans, metadata, RootLayout(), viewport (+9 more)

### Community 45 - "Resume Craft"
Cohesion: 0.13
Nodes (14): Arquitetura, Autor, Configurando os pacotes no Stripe, Créditos de IA e pagamentos, Deploy, Exportação em PDF, Instalação, Primeiros passos (+6 more)

### Community 55 - "api.ts"
Cohesion: 0.13
Nodes (6): axios, API, IAGenerationPayload, IAGenerationResponse, ResumeDownloadPayload, TranslatePayload

### Community 56 - "Button"
Cohesion: 0.34
Nodes (10): AccountPage(), BuyCreditsDialog(), BuyCreditsDialogProps, GenerationDialog(), AIGenerationDropdown(), Button(), DropdownMenuGroup(), DropdownMenuLabel() (+2 more)

### Community 57 - "stripe"
Cohesion: 0.33
Nodes (4): @auth/drizzle-adapter@^1.11.3, stripe@^23.1.0, @auth/drizzle-adapter, stripe

## Knowledge Gaps
- **1 isolated node(s):** `{ GET, POST }`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 404 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `lucide-react`, `resume/index.tsx`, `resume-content/header.tsx`, `resume-card.tsx`, `eevee.tsx`, `translate.tsx`, `Button`, `dependencies`, `package.json`, `Button`, `translate.tsx`, `react`, `auth.ts`, `button.tsx`, `Button`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `{ GET, POST }` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Why does `next` connect `lucide-react` to `resume/index.tsx`, `auth.ts`, `resume-card.tsx`, `resume-content/header.tsx`, `Button`, `Button`, `dependencies`, `package.json`, `translate.tsx`, `translate.tsx`, `react`, `button.tsx`, `Button`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `resume/index.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11742424242424243 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `translate.tsx` to `lucide-react`, `resume/index.tsx`, `resume-content/header.tsx`, `eevee.tsx`, `resume-card.tsx`, `translate.tsx`, `Button`, `dependencies`, `package.json`, `Button`, `react`, `react`, `button.tsx`, `Button`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Should `eevee.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1402439024390244 - nodes in this community are weakly interconnected._