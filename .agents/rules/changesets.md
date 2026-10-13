# Changeset Rules

Required when modifying `packages/{cli,react,utils}/src/**/*.{ts,tsx}` (excluding test and story files).

Generate the changeset through the CLI. Do not create the file under `.changeset/` by hand.

```bash
pnpm changeset add
```

The CLI requires interactive input to select packages and bump types. If the CLI is unavailable or broken, or the execution environment does not support interactive input, write the file manually and report the reason for that fallback.

**Bump type**

- `patch`: bug fix, internal change
- `minor`: new feature with backward compatibility
- `major`: breaking change (alters existing API)

The generated file looks like this:

```md
---
"@yamada-ui/react": patch
---

One-sentence summary of the fix in English.
```

For changes across multiple packages, select all affected packages in the CLI:

```md
---
"@yamada-ui/react": patch
"@yamada-ui/utils": patch
---
```
