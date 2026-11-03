# Graph Report - resume-craft  (2026-11-03)

## Corpus Check
- 125 files · ~26,488 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 703 nodes · 1612 edges · 40 communities (29 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2fdc78d3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Button
- react
- @hello-pangea/dnd
- actions.ts
- eevee.tsx
- shadcn/ui
- lucide-react
- Button
- dependencies
- package.json
- components.json
- api.ts
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
- react-resizable-panels
- allowBuilds
- assist
- formatter
- suspicious
- vcs
- author
- AGENTS.md
- CLAUDE.md
- { GET, POST }
- translate.tsx
- @tiptap/extension-text-align
- @tiptap/extensions
- @tiptap/react
- tw-animate-css@^1.4.0
- @hookform/resolvers

## God Nodes (most connected - your core abstractions)
1. `Button()` - 48 edges
2. `react` - 45 edges
3. `lucide-react` - 38 edges
4. `cn` - 27 edges
5. `react-hook-form` - 24 edges
6. `next` - 22 edges
7. `Dialog()` - 18 edges
8. `shadcn/ui` - 17 edges
9. `compilerOptions` - 16 edges
10. `radix-ui` - 15 edges

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

## Communities (40 total, 11 thin omitted)

### Community 0 - "Button"
Cohesion: 0.06
Nodes (60): sonner@^2.0.8, lucide-react, react-hook-form, react-zoom-pan-pinch, sonner, @tanstack/react-query, BuyCreditsDialog(), BuyCreditsDialogProps (+52 more)

### Community 1 - "react"
Cohesion: 0.08
Nodes (38): cn@^0.5.0, radix-ui@^1.8.1, cn, radix-ui, react, ResumeArrayKeys, FormConfig, formConfig (+30 more)

### Community 3 - "actions.ts"
Cohesion: 0.07
Nodes (39): drizzle-orm, next-auth, POST(), GET(), DashboardResumesPage(), SkeletonResumesListFallback(), DashboardResumePage(), ResumeLoader() (+31 more)

### Community 4 - "eevee.tsx"
Cohesion: 0.14
Nodes (29): Element(), ElementProps, Ditto(), Eevee(), SectionHeading(), SectionHeadingProps, BaseResumeProps, ResumeTemplateProps (+21 more)

### Community 5 - "shadcn/ui"
Cohesion: 0.06
Nodes (35): 1. Define registry.json, 2. Build, 3. Consume, Add Components, Avatar Has No `size` Prop, Base UI Support (January 2026), Build (Custom Registry), Building a Custom Registry (+27 more)

### Community 6 - "lucide-react"
Cohesion: 0.07
Nodes (41): nextConfig, next@16.4.2, next, DesktopEditor(), EditorLayoutProps, EditorLoading(), MobileEditor(), mobileTabs (+33 more)

### Community 7 - "Button"
Cohesion: 0.06
Nodes (45): Anti-patterns to avoid, Composition recipes, Default aesthetic for product UI, Design Direction for shadcn on Vercel, Reach for this first, LoginPage(), handleLogin(), Providers (+37 more)

### Community 8 - "dependencies"
Cohesion: 0.07
Nodes (30): dependencies, @auth/drizzle-adapter@^1.11.3, axios@^1.21.0, class-variance-authority@^0.7.1, date-fns@^4.4.0, drizzle-orm@^0.45.4, lucide-react@^1.58.0, next-auth@5.0.0-beta.32 (+22 more)

### Community 9 - "package.json"
Cohesion: 0.11
Nodes (25): devDependencies, babel-plugin-react-compiler@1.0.0, @biomejs/biome@2.5.15, drizzle-kit@^0.31.11, @svgr/webpack@^8.1.0, tailwindcss@^4, @tailwindcss/turbopack@^4, @types/node@^20 (+17 more)

### Community 10 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 11 - "api.ts"
Cohesion: 0.15
Nodes (5): API, IAGenerationPayload, IAGenerationResponse, ResumeDownloadPayload, TranslatePayload

### Community 12 - "client-provider.tsx"
Cohesion: 0.17
Nodes (13): next-themes@^0.4.6, next-themes, geistMono, geistSans, metadata, RootLayout(), ClientProvider(), ClientProviderProps (+5 more)

### Community 13 - "zod"
Cohesion: 0.29
Nodes (10): openai, zod, fixContentSchema, POST(), jobTitleSchema, POST(), POST(), translateSchema (+2 more)

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
Cohesion: 0.18
Nodes (11): scripts, build, db:generate, db:migrate, db:push, db:studio, db:sync, dev (+3 more)

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

### Community 34 - "translate.tsx"
Cohesion: 0.21
Nodes (14): GenerationTranslate(), GenerationTranslateProps, TranslateFormData, translateSchema, LanguageOption, LanguageSection(), languagesOptions, Select() (+6 more)

### Community 39 - "@hookform/resolvers"
Cohesion: 0.20
Nodes (6): @hookform/resolvers@^5.9.2, mergician@^2.0.2, react-dom@19.3.0, @hookform/resolvers, mergician, react-dom

## Knowledge Gaps
- **1 isolated node(s):** `{ GET, POST }`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 277 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Button`, `translate.tsx`, `actions.ts`, `eevee.tsx`, `lucide-react`, `Button`, `dependencies`, `package.json`, `client-provider.tsx`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **What connects `{ GET, POST }` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.05851619644723093 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `Button` to `react`, `translate.tsx`, `actions.ts`, `lucide-react`, `Button`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.07686932215234102 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `Button` to `react`, `translate.tsx`, `actions.ts`, `eevee.tsx`, `lucide-react`, `Button`, `dependencies`, `package.json`, `client-provider.tsx`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `actions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07457627118644068 - nodes in this community are weakly interconnected._