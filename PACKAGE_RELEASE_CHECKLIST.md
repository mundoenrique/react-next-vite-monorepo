# Package Release Checklist

Use this checklist in every PR that introduces or updates a public package.

## PR Checklist

- [ ] The package is intended for external consumers.
- [ ] Ownership for maintenance and releases is defined.
- [ ] The public API surface is clear and stable.

- [ ] `private: true` is removed for public packages.
- [ ] `name`, `version`, `description`, `license`, and `repository` are set.
- [ ] `engines` is set when a minimum Node.js version is required.

- [ ] `exports` is explicit and every export path exists.
- [ ] `files` includes only publishable artifacts.
- [ ] `README.md` and required runtime files are included.

- [ ] Runtime deps are in `dependencies`.
- [ ] Host/framework deps are in `peerDependencies` when needed.
- [ ] Tooling deps are in `devDependencies`.
- [ ] Version ranges are aligned with monorepo standards.

- [ ] Build output is generated (for example `dist/`).
- [ ] Type declarations are published (TypeScript packages).
- [ ] `main` / `module` / `types` matches actual output and `exports`.

- [ ] `npm run lint` passes.
- [ ] `npm run check-types` passes.
- [ ] Package tests pass (if present).

- [ ] `npm pack --dry-run -w <workspace>` was executed.
- [ ] Tarball contents and size were reviewed.
- [ ] No private/internal files are included in the tarball.

- [ ] Semver impact is identified (major/minor/patch).
- [ ] Changelog or release notes are updated.
- [ ] Breaking changes include migration notes.

- [ ] No secrets are included.
- [ ] Third-party licenses were checked.
- [ ] Dependency audit was reviewed before release.

## Suggested Defaults

- Config packages: publish only config artifacts (for example `*.json`, `*.mjs`) and docs.
- Library packages (UI, HTTP): publish `dist/`, types, and docs.
- Internal-only packages: keep `private: true` and skip publishing.
