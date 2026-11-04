# Graph Report - resume-craft  (2026-11-03)

## Corpus Check
- 129 files · ~27,961 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 714 nodes · 1646 edges · 35 communities (30 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `01712c2a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- header.tsx
- react
- @tiptap/extension-text-align
- Button
- eevee.tsx
- shadcn/ui
- lucide-react
- Button
- dependencies
- package.json
- components.json
- client-provider.tsx
- zod
- compilerOptions
- types.d.ts
- rules
- download/route.ts
- scripts
- biome.json
- useSortedClasses
- formatter
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
- resume-card.tsx
- translate.tsx

## God Nodes (most connected - your core abstractions)
1. `Button()` - 48 edges
2. `react` - 47 edges
3. `lucide-react` - 38 edges
4. `cn` - 27 edges
5. `react-hook-form` - 24 edges
6. `next` - 23 edges
7. `Dialog()` - 18 edges
8. `shadcn/ui` - 17 edges
9. `compilerOptions` - 16 edges
10. `radix-ui` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Composition recipes` --references--> `Badge()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/badge.tsx
- `Reach for this first` --references--> `Badge()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/badge.tsx
- `Reach for this first` --references--> `Input()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/input/index.tsx
- `Reach for this first` --references--> `Label()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/label.tsx
- `Reach for this first` --references--> `Select()`  [INFERRED]
  .claude/skills/shadcn/SKILL.md → src/components/ui/select.tsx

## Import Cycles
- None detected.

## Communities (35 total, 5 thin omitted)

### Community 0 - "header.tsx"
Cohesion: 0.20
Nodes (15): react-zoom-pan-pinch@^4.2.0, react-zoom-pan-pinch, TransformControls(), TransformControlsProps, NavigationHeader(), NavigationHeaderProps, ResumeContent(), ResumeContentProps (+7 more)

### Community 1 - "react"
Cohesion: 0.07
Nodes (44): cn@^0.5.0, radix-ui@^1.8.1, @tiptap/react@^3.32.0, cn, radix-ui, react, @tiptap/react, FormConfig (+36 more)

### Community 2 - "@tiptap/extension-text-align"
Cohesion: 0.20
Nodes (6): shadcn@^4.22.0, @tiptap/extension-text-align@^3.32.0, @tiptap/extensions@3.32.0, shadcn, @tiptap/extension-text-align, @tiptap/extensions

### Community 3 - "Button"
Cohesion: 0.12
Nodes (23): @hookform/resolvers@^5.9.2, @hookform/resolvers, DeleteResumeDialog(), DuplicateResumeDialog(), DuplicateResumeDialogData, DuplicateResumeDialogProps, DuplicateResumeDialogSchema, NewResumeDialogData (+15 more)

### Community 4 - "eevee.tsx"
Cohesion: 0.14
Nodes (29): Element(), ElementProps, Ditto(), Eevee(), SectionHeading(), SectionHeadingProps, BaseResumeProps, ResumeTemplateProps (+21 more)

### Community 5 - "shadcn/ui"
Cohesion: 0.06
Nodes (34): 1. Define registry.json, 2. Build, 3. Consume, Add Components, Avatar Has No `size` Prop, Base UI Support (January 2026), Build (Custom Registry), Building a Custom Registry (+26 more)

### Community 6 - "lucide-react"
Cohesion: 0.07
Nodes (44): nextConfig, @hello-pangea/dnd@^18.0.1, @hello-pangea/dnd, lucide-react, next, react-hook-form, DesktopEditor(), EditorLayoutProps (+36 more)

### Community 7 - "Button"
Cohesion: 0.06
Nodes (53): Anti-patterns to avoid, Composition recipes, Default aesthetic for product UI, Design Direction for shadcn on Vercel, Reach for this first, @tanstack/react-query, LoginPage(), handleLogin() (+45 more)

### Community 8 - "dependencies"
Cohesion: 0.06
Nodes (31): dependencies, @auth/drizzle-adapter@^1.11.3, canvas-confetti@^1.9.4, class-variance-authority@^0.7.1, drizzle-orm@^0.45.4, lucide-react@^1.58.0, mergician@^2.0.2, next@16.4.2 (+23 more)

### Community 9 - "package.json"
Cohesion: 0.10
Nodes (27): devDependencies, babel-plugin-react-compiler@1.0.0, @biomejs/biome@2.5.15, drizzle-kit@^0.31.11, @svgr/webpack@^8.1.0, tailwindcss@^4, @tailwindcss/turbopack@^4, @types/canvas-confetti@^1.9.0 (+19 more)

### Community 10 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 12 - "client-provider.tsx"
Cohesion: 0.14
Nodes (16): Wrapping with TooltipProvider, next-themes@^0.4.6, next-themes, geistMono, geistSans, metadata, RootLayout(), ClientProvider() (+8 more)

### Community 13 - "zod"
Cohesion: 0.26
Nodes (11): openai@^7.45.1, openai, zod, fixContentSchema, POST(), jobTitleSchema, POST(), POST() (+3 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 15 - "types.d.ts"
Cohesion: 0.11
Nodes (17): AIGenerationMode, ResumeCertificationData, ResumeContentData, ResumeData, ResumeEducationData, ResumeExperienceData, ResumeImageData, ResumeInfosData (+9 more)

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
Cohesion: 0.10
Nodes (31): stripe@^23.1.0, drizzle-orm, next-auth, stripe, POST(), GET(), DashboardResumePage(), ResumeLoader() (+23 more)

### Community 36 - "resume-card.tsx"
Cohesion: 0.19
Nodes (13): date-fns@^4.4.0, date-fns, DashboardResumesPage(), SkeletonResumesListFallback(), AddResumeButton(), NewResumeDialog(), ResumeCard(), ResumeCardButton() (+5 more)

### Community 38 - "translate.tsx"
Cohesion: 0.06
Nodes (32): axios@^1.21.0, axios, mergician, sonner, GenerationToFixContent(), GenerationToFixContentProps, GenerationDialog(), GenerationDialogProps (+24 more)

## Knowledge Gaps
- **1 isolated node(s):** `{ GET, POST }`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 279 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `header.tsx`, `auth.ts`, `Button`, `resume-card.tsx`, `eevee.tsx`, `lucide-react`, `Button`, `dependencies`, `package.json`, `translate.tsx`, `client-provider.tsx`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **What connects `{ GET, POST }` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.0670762928827445 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `Button` to `header.tsx`, `react`, `Button`, `resume-card.tsx`, `translate.tsx`, `lucide-react`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.11612903225806452 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `header.tsx`, `react`, `Button`, `eevee.tsx`, `resume-card.tsx`, `translate.tsx`, `Button`, `dependencies`, `package.json`, `client-provider.tsx`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `eevee.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1402439024390244 - nodes in this community are weakly interconnected._