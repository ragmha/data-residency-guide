# EU Data Residency Guide

An independent, source-backed guide for teams adopting GitHub Enterprise Cloud
with data residency (GHE.com) in the EU.

Four parts:

1. **Why sovereignty:** the legal and strategic pressures, and how residency
   differs from sovereignty.
2. **What GHE.com gives you:** the platform, what stays in the EU, and Copilot
   with data residency.
3. **Contracts and law:** the GitHub DPA clause by clause, and a map of GDPR,
   NIS2, DORA, the AI Act, the Data Act, the CRA and the CLOUD Act.
4. **Adopt with confidence:** a readiness checklist, setup and migration, and
   an FAQ.

Every factual claim links to a primary source. Recommendations are labelled
"Guide advice" and worked examples are labelled "Hypothetical scenario". The
sources page lists what could not be verified. This is not legal advice.

## Run locally

Requires Bun 1.3.5+ and Node.js 22.12+.

```sh
bun install --frozen-lockfile
bun run dev
```

Open <http://127.0.0.1:4321/data-residency-guide/>. The base path matches
GitHub Pages.

```sh
bun run check
bun run test
bun run build
```

The static output is `dist/`.

## Keep it current

Each page shows "Review overdue" 30 days after its `verified` date. Re-check
the sources listed in `src/content/guide/sources.md`, update the content, and
bump `verified`.
