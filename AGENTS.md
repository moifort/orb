# Repository Guidelines

## Project Structure & Module Organization
- `app/` Nuxt app: pages, assets, plugins (Vue 3 SFCs).
- `server/` Nitro backend: tRPC routers, queries, routes, and plugins.
- `shared/` Cross‑shared TypeScript types and validators (import via `#shared/...`).
- `public/` Static assets served as‑is.
- `nuxt.config.ts` project config; `.data/db` is Nitro fs storage (local only).

## Build, Test, and Development Commands
- `bun install` install dependencies.
- `bun dev` start Nuxt with HMR at `http://localhost:3000`.
- `bun run build` production build to `.nuxt/`.
- `bunx biome check --write .` format + lint fix (Biome).
- `bunx vue-tsc --noEmit` type‑check Vue/TS without emitting files.

## Coding Style & Naming Conventions
- Formatting: Biome enforced (tabs, single quotes, semicolons as needed).
- Imports: let Biome organize; prefer path aliases `~`, `~~`, `#shared`.
- Files: Vue SFCs `kebab-case.vue`; TS files `kebab-case.ts`.
- Code: types/interfaces `PascalCase`; functions/vars `camelCase`; prefer named exports.

## Testing Guidelines
- No test runner is configured yet. Prefer Vitest + Nuxt Test Utils.
- Convention: colocate `*.spec.ts` next to code or under `tests/` mirroring paths.
- Aim for unit tests on `server/` and `shared/`; snapshot tests for simple Vue views.

## Commit & Pull Request Guidelines
- Commits follow Conventional Commits: `feat(scope): ...`, `docs: ...`, `chore(deps): ...`.
- PRs: include a clear description, scope/impact, and linked issues. Add screenshots for UI changes.
- CI‑friendliness: run `bunx biome check --write .` and `bunx vue-tsc --noEmit` before submitting.

## Agent‑Specific Notes
- Do not edit generated folders (`.nuxt/`, `.data/`) or commit them.
- Keep diffs minimal and focused; update imports to use aliases.
- For new APIs, add tRPC procedures in `server/boiler/*` or a new module and expose via `server/api` router; consume via `app/plugins/trpc`.
