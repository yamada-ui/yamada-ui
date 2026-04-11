---
"@yamada-ui/react": minor
---

Added `HydrationContext` and `useHydrationContext` to both `createComponent` and `createSlotComponent`. By using these by default internally, the `suppressHydrationWarning` value set on the root component is now propagated to child components.
