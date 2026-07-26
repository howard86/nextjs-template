# Next.js Template

An opinionated [Next.js 16](https://nextjs.org/) App Router template running on
[Bun 1.3.14](https://bun.sh/), with React 19, TypeScript, Chakra UI 3, Redux
Toolkit, RTK Query, and Mock Service Worker.

## Requirements

- Bun 1.3.14

The package manager version is pinned in `package.json` and the dependency
graph is committed in `bun.lock`.

## Getting started

```bash
bun install --frozen-lockfile
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). Application routes live
under `src/app` and update as you edit them.

The template keeps these public routes:

- `/` — home page
- `/new-page` — example page
- `/api/hello` — route handler returning
  `{ success: true, data: { name, timestamp } }`

## Commands

```bash
bun run dev          # start the development server
bun run build        # create a production build
bun run start        # serve the production build
bun run analyze      # analyze the production bundle
bun test             # run the Bun Test suite
bun test --coverage  # run tests with coverage
bun run check        # run Ultracite checks
bun run typecheck    # check TypeScript
bun run knip         # find unused files, exports, and dependencies
```

Next.js commands run through Bun locally and in CI. Managed deployment
platforms such as Vercel remain platform-controlled.

## Quality workflow

Before opening a pull request, run:

```bash
bun install --frozen-lockfile
bun run check
bun run typecheck
bun run knip
bun test --coverage
bun run build
typos
bun outdated
```

Husky and lint-staged apply the relevant checks to commits. CI repeats the
repository checks and build. Run gitleaks against both staged changes and the
`main..HEAD` commit range before publishing. Dependabot groups weekly Bun and
GitHub Actions updates, while Release Please prepares releases from
Conventional Commits.

TypeScript 6.0.3 is intentionally pinned for now. TypeScript 7 remains
excluded until Next.js 16 supports it without an experimental fallback.

## Stack notes

- Chakra UI provides the light-only purple design system.
- Redux providers create a store per provider instance; RTK Query remains
  available for data fetching.
- Bun Test uses Testing Library, happy-dom, jest-dom matchers, and MSW 2.
- Bundle analysis uses Next.js `experimental-analyze`; no webpack analyzer is
  required.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Bun with Next.js](https://bun.com/docs/guides/ecosystem/nextjs)
- [Chakra UI v3 migration guide](https://chakra-ui.com/docs/get-started/migration)

## License

MIT
