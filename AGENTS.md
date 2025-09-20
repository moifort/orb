# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts the Nuxt 3 client: pages, components, assets, and Vue plugins.
- `server/` contains Nitro backends: tRPC routers, REST routes, and server utilities.
- `shared/` stores cross-cutting TypeScript types and validators imported via `#shared/...`.
- `public/` serves static assets verbatim; avoid runtime logic here.
- Local data persists under `.data/db`; treat it as disposable developer storage.

## Build, Test, and Development Commands
- `bun install` installs workspace dependencies.
- `bun dev` launches the Nuxt dev server with HMR at `http://localhost:3000`.
- `bun run build` creates a production bundle in `.nuxt/`.
- `bunx biome check --write .` formats and auto-fixes lint issues using Biome.
- `bunx vue-tsc --noEmit` type-checks Vue and TypeScript sources without emitting files.

## Coding Style & Naming Conventions
- Formatting is Biome-driven: tabs, single quotes, and semicolons where required.
- Prefer alias imports (`~`, `~~`, `#shared`) and let Biome organize headers.
- Vue SFCs use `kebab-case.vue`; TypeScript modules use `kebab-case.ts`.
- Types and interfaces follow `PascalCase`; functions and variables use `camelCase`.

## Testing Guidelines
- No runner is configured yet; target Vitest + Nuxt Test Utils when adding coverage.
- Place specs beside source files (`feature.spec.ts`) or mirror paths under `tests/`.
- Align tests with server logic and shared validators; favor snapshot tests for simple views.
- Run `bunx vue-tsc --noEmit` before PRs to catch typing regressions.

## Commit & Pull Request Guidelines
- Use Conventional Commits (e.g., `feat(trpc): add user router`, `docs: update readme`).
- PRs should outline scope, impact, linked issues, and include UI screenshots when applicable.
- Keep diffs focused, reference relevant commands run, and mention new environment steps.

## Agent-Specific Notes
- Do not modify generated artifacts like `.nuxt/` or `.data/`.
- Favor minimal, well-scoped patches and retain existing alias patterns.
- Coordinate new APIs through `server/api` and consume them via `app/plugins/trpc`.
