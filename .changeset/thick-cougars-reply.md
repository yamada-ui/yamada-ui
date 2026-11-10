---
"@yamada-ui/react": minor
---

Add `DynamicIcon` through the dedicated `"@yamada-ui/react/components/icon/dynamic"` entry point to load Lucide icons by name without affecting regular imports.

Remove the `icons` namespace export. Use `DynamicIcon` instead of looking up components with `icons[name]`. Icon names use kebab-case without the `Icon` suffix, such as `"camera"` instead of `"CameraIcon"`.

```tsx
import { DynamicIcon } from "@yamada-ui/react/components/icon/dynamic"

;<DynamicIcon name="camera" />
```

Use `iconNames` from the same entry point to list available icon names. Individual icon exports, such as `CameraIcon`, remain available from `"@yamada-ui/react"`.
