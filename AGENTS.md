# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

A Next.js application for the personal website.

## Development

### Tech stack

- Next.js as the fullstack framework
- React as the frontend library
- TypeScript as primary language
- Shadcn UI for components
- Tailwind CSS for styling
- PostHog for analytics

### Scripts

```bash
# Install dependencies
pnpm add

# Type checking, linting, and formatting
pnpm typecheck
pnpm lint
pnpm format
```

## Working agreements

- Use `pnpm` when working with dependencies
- Ask for confirmation before adding new production dependencies
- Format any files that you modify or add

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
