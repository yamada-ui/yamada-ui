---
"@yamada-ui/react": patch
---

Removed redundant `suppressHydrationWarning` forwarding to the static `<h3>` and `<p>` wrapper elements inside `AccordionButton` and `AccordionPanel`. React's `suppressHydrationWarning` does not propagate to children and has no effect on these static wrappers; the legitimate forwarding via `getButtonProps` and `getPanelProps` is preserved.
