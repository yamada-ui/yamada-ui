---
"@yamada-ui/react": patch
---

Fixed `Dropzone` keyboard open (Space/Enter) breaking when `ref` is passed via `getRootProps` by preventing react-dropzone's internal `rootRef` from being overwritten.
