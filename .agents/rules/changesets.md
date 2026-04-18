# Changeset Rules

Required when modifying `packages/{cli,react,utils}/src/**/*.{ts,tsx}` (excluding test and story files). Create a file in `.changeset/`.

```md
---
"@yamada-ui/react": patch
---

One-sentence summary of the fix in English.
```

**Bump type**

- `patch`: bug fix, internal change
- `minor`: new feature with backward compatibility
- `major`: breaking change (alters existing API)

For changes across multiple packages:

```md
---
"@yamada-ui/react": patch
"@yamada-ui/utils": patch
---
```
