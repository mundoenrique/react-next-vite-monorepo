---
name: 'Review Change'
description: 'Use when you want a risk-focused code review of a change before merge in this monorepo.'
argument-hint: 'Describe PR scope, target apps/packages, and review focus (bugs, regressions, security, tests)'
agent: 'agent'
---

Run a code review of the requested change with a findings-first format.

Review request:
$ARGUMENTS

Execution rules:

1. Follow workspace guidance from [AGENTS.md](../../AGENTS.md).
2. Apply framework-specific rules from:

- [Next instructions](../instructions/frontend-next.instructions.md)
- [Vite instructions](../instructions/frontend-vite.instructions.md)

3. Prioritize correctness, behavioral regressions, security issues, and missing tests.
4. Keep summaries brief; findings must be the primary output.

Review checklist:

1. Identify bugs or correctness issues with concrete file references.
2. Flag breaking behavior changes and compatibility risks.
3. Check for type safety and lint-risk patterns.
4. Verify whether test coverage is sufficient for changed behavior.
5. List open questions/assumptions when evidence is incomplete.

Output format:

1. Findings (ordered by severity, with file links)
2. Open questions or assumptions
3. Brief change-summary and residual risk/testing gaps
4. Recommended next actions
