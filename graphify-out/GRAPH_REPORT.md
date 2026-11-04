# Graph Report - resume-craft  (2026-11-04)

## Corpus Check
- 149 files · ~39,308 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 863 nodes · 1849 edges · 57 communities (44 shown, 13 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 38 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1d149dd4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- job-title.tsx
- resume-card.tsx
- resume/index.tsx
- mobile-nav.tsx
- eevee.tsx
- shadcn/ui
- client-provider.tsx
- ai-generation-dropdown/index.tsx
- dependencies
- package.json
- components.json
- lucide-react
- Requirements
- react
- compilerOptions
- types.d.ts
- rules
- download/route.ts
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
- { GET, POST }
- auth.ts
- Requirements
- api.ts
- Requirements
- Dialog
- openspec-explore/SKILL.md
- Requirements
- explore.md
- pdf-export Specification
- rules
- header.tsx
- react-icons
- lucide-react
- Button
- new-resume-dialog.tsx

## God Nodes (most connected - your core abstractions)
1. `Button()` - 50 edges
2. `react` - 48 edges
3. `lucide-react` - 39 edges
4. `cn` - 27 edges
5. `next` - 24 edges
6. `react-hook-form` - 24 edges
7. `Dialog()` - 18 edges
8. `shadcn/ui` - 17 edges
9. `getSession` - 16 edges
10. `compilerOptions` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Composition recipes` --references--> `Badge()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/badge.tsx
- `Reach for this first` --references--> `Badge()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/badge.tsx
- `Reach for this first` --references--> `Button()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/button.tsx
- `Reach for this first` --references--> `DropdownMenu()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/dropdown-menu.tsx
- `Reach for this first` --references--> `Input()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/input/index.tsx

## Import Cycles
- None detected.

## Communities (57 total, 13 thin omitted)

### Community 0 - "job-title.tsx"
Cohesion: 0.14
Nodes (14): @hookform/resolvers, GenerationToFixContent(), GenerationDialogProps, GenerationData, GenerationFromJobTitle(), GenerationFromJobTitleProps, JobTitleFormData, jobTitleSchema (+6 more)

### Community 1 - "resume-card.tsx"
Cohesion: 0.21
Nodes (12): date-fns@^4.4.0, date-fns, DashboardResumesPage(), SkeletonResumesListFallback(), AddResumeButton(), ResumeCard(), ResumeCardButton(), ResumeCardButtonProps (+4 more)

### Community 2 - "resume/index.tsx"
Cohesion: 0.13
Nodes (22): class-variance-authority@^0.7.1, react-resizable-panels@^4.14.6, class-variance-authority, react-resizable-panels, DesktopEditor(), EditorLayoutProps, EditorLoading(), MobileEditor() (+14 more)

### Community 3 - "mobile-nav.tsx"
Cohesion: 0.14
Nodes (22): Anti-patterns to avoid, Composition recipes, Default aesthetic for product UI, Design Direction for shadcn on Vercel, Reach for this first, DashboardLayout(), DashboardLayoutProps, SessionUserDropdown() (+14 more)

### Community 4 - "eevee.tsx"
Cohesion: 0.15
Nodes (27): Element(), ElementProps, Ditto(), Eevee(), SectionHeading(), SectionHeadingProps, BaseResumeProps, ResumeTemplateProps (+19 more)

### Community 5 - "shadcn/ui"
Cohesion: 0.06
Nodes (35): 1. Define registry.json, 2. Build, 3. Consume, Add Components, Avatar Has No `size` Prop, Base UI Support (January 2026), Build (Custom Registry), Building a Custom Registry (+27 more)

### Community 6 - "client-provider.tsx"
Cohesion: 0.15
Nodes (15): next-themes@^0.4.6, next-themes, geistMono, geistSans, metadata, RootLayout(), ClientProvider(), ClientProviderProps (+7 more)

### Community 7 - "ai-generation-dropdown/index.tsx"
Cohesion: 0.13
Nodes (16): radix-ui@^1.8.1, radix-ui, GenerationDialog(), AIGenerationDropdown(), UserDropdown(), UserDropdownProps, Avatar(), AvatarFallback() (+8 more)

### Community 8 - "dependencies"
Cohesion: 0.06
Nodes (31): dependencies, @auth/drizzle-adapter@^1.11.3, axios@^1.21.0, canvas-confetti@^1.9.4, drizzle-orm@^0.45.4, @hello-pangea/dnd@^18.0.1, @hookform/resolvers@^5.9.2, lucide-react@^1.58.0 (+23 more)

### Community 9 - "package.json"
Cohesion: 0.10
Nodes (27): devDependencies, babel-plugin-react-compiler@1.0.0, @biomejs/biome@2.5.15, drizzle-kit@^0.31.11, @svgr/webpack@^8.1.0, tailwindcss@^4, @tailwindcss/turbopack@^4, @types/canvas-confetti@^1.9.0 (+19 more)

### Community 10 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 11 - "lucide-react"
Cohesion: 0.08
Nodes (35): react-hook-form@^7.90.0, @hello-pangea/dnd, react-hook-form, GenerationTranslate(), InfosSidebar(), SectionTitle(), SectionTitleProps, BasicInfoSection() (+27 more)

### Community 12 - "Requirements"
Cohesion: 0.07
Nodes (27): ai-credits Specification, Purpose, Requirement: Checkout, Requirement: Crédito da compra, Requirement: Débito por geração, Requirement: Histórico de transações, Requirement: Idempotência, Requirement: Pacotes de créditos (+19 more)

### Community 13 - "react"
Cohesion: 0.06
Nodes (42): cn@^0.5.0, @tiptap/react@^3.32.0, cn, react, @tiptap/react, MultipleDragItemData, MultipleDragList(), MultipleDragListProps (+34 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 15 - "types.d.ts"
Cohesion: 0.06
Nodes (30): Purpose, Requirement: Layout responsivo, Requirement: Preview com zoom, Requirement: Reordenação de itens, Requirement: Salvamento automático, Requirement: Seções de conteúdo, Requirements, resume-editor Specification (+22 more)

### Community 16 - "rules"
Cohesion: 0.18
Nodes (11): noUnknownProperty, linter, enabled, rules, complexity, correctness, preset, style (+3 more)

### Community 17 - "download/route.ts"
Cohesion: 0.22
Nodes (9): puppeteer-core@25.11.0, @sparticuz/chromium@153.0.0, puppeteer@25.11.0, puppeteer, puppeteer-core, @sparticuz/chromium, launchBrowser(), POST() (+1 more)

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

### Community 34 - "auth.ts"
Cohesion: 0.08
Nodes (42): drizzle-orm, next-auth, openai, stripe, zod, POST(), GET(), POST() (+34 more)

### Community 35 - "Requirements"
Cohesion: 0.17
Nodes (11): ai-generation Specification, Purpose, Requirement: Gerar a partir do cargo, Requirement: Melhorar conteúdo, Requirement: Traduzir conteúdo, Requirement: Tratamento de erros da IA, Requirements, Scenario: Gerar conteúdo para uma vaga (+3 more)

### Community 36 - "api.ts"
Cohesion: 0.13
Nodes (6): axios, API, IAGenerationPayload, IAGenerationResponse, ResumeDownloadPayload, TranslatePayload

### Community 37 - "Requirements"
Cohesion: 0.17
Nodes (11): Purpose, Requirement: Cor de tema, Requirement: Idioma do currículo, Requirement: Layout das seções, Requirement: Templates, Requirements, resume-structure Specification, Scenario: Mover seção para a lateral (+3 more)

### Community 38 - "Dialog"
Cohesion: 0.24
Nodes (12): DeleteResumeDialog(), Dialog(), DialogProps, Dialog(), DialogContent(), DialogDescription(), DialogHeader(), DialogOverlay() (+4 more)

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

### Community 44 - "header.tsx"
Cohesion: 0.17
Nodes (16): react-zoom-pan-pinch@^4.2.0, react-zoom-pan-pinch, TransformControls(), TransformControlsProps, DuplicateResumeDialog(), NavigationHeader(), NavigationHeaderProps, ResumeContent() (+8 more)

### Community 45 - "react-icons"
Cohesion: 0.20
Nodes (6): react-icons@^5.7.0, shadcn@^4.22.0, @tiptap/starter-kit@^3.32.0, react-icons, shadcn, @tiptap/starter-kit

### Community 46 - "lucide-react"
Cohesion: 0.19
Nodes (14): nextConfig, lucide-react, mergician, next, sonner, @tanstack/react-query, NavItemProps, BuyCreditsDialogProps (+6 more)

### Community 55 - "Button"
Cohesion: 0.20
Nodes (15): LoginPage(), handleLogin(), Providers, AccountPage(), metadata, NotFound(), BuyCreditsDialog(), ThemeToggle() (+7 more)

### Community 56 - "new-resume-dialog.tsx"
Cohesion: 0.40
Nodes (4): NewResumeDialog(), NewResumeDialogData, NewResumeDialogSchema, createResume()

## Knowledge Gaps
- **1 isolated node(s):** `{ GET, POST }`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 366 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `job-title.tsx`, `resume-card.tsx`, `auth.ts`, `mobile-nav.tsx`, `resume/index.tsx`, `eevee.tsx`, `Dialog`, `ai-generation-dropdown/index.tsx`, `dependencies`, `package.json`, `client-provider.tsx`, `lucide-react`, `header.tsx`, `lucide-react`, `Button`, `new-resume-dialog.tsx`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **What connects `{ GET, POST }` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `job-title.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `job-title.tsx`, `resume-card.tsx`, `resume/index.tsx`, `mobile-nav.tsx`, `eevee.tsx`, `Dialog`, `ai-generation-dropdown/index.tsx`, `dependencies`, `package.json`, `client-provider.tsx`, `lucide-react`, `header.tsx`, `react`, `Button`, `new-resume-dialog.tsx`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Should `resume/index.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1339031339031339 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `Button` to `job-title.tsx`, `mobile-nav.tsx`, `Dialog`, `ai-generation-dropdown/index.tsx`, `lucide-react`, `header.tsx`, `react`, `lucide-react`, `new-resume-dialog.tsx`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `mobile-nav.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14039408866995073 - nodes in this community are weakly interconnected._