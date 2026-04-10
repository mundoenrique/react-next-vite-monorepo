---
name: 'Ship Change'
description: 'Use when you want an end-to-end code change in this monorepo (implement, validate, and summarize).'
argument-hint: 'Describe the change, target app/package, and acceptance criteria'
agent: 'agent'
---

Implement and ship the requested change end-to-end in this monorepo.

Request details:
$ARGUMENTS

Execution rules:

1. Follow workspace guidance from [AGENTS.md](../../AGENTS.md).
2. Apply framework-specific rules from:

- [Next instructions](../instructions/frontend-next.instructions.md)
- [Vite instructions](../instructions/frontend-vite.instructions.md)

3. Keep changes minimal, focused, and aligned with existing patterns.
4. Reuse shared code from packages/ when possible; avoid app-to-app imports.
5. After edits, validate with the smallest useful scope first, then wider scope if needed.

Validation workflow:

1. Run target-scoped checks first with Turbo filter when possible.
2. If target checks pass, run broader checks only when change impact requires it.
3. Report what was run and what was not run.

Output format:

1. Change summary
2. Files changed with purpose
3. Validation commands executed and outcomes
4. Risks, assumptions, or follow-ups
