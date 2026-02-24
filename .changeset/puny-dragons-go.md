---
"@yamada-ui/react": minor
---

Upgraded [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) from version 3 to 4. This update introduces several major changes:

- `keyboardStep` prop of `Resizable.Root` has been removed.
- `storageKey` and `storage` props of `Resizable.Root` have been removed. Please use `Resizable.useLayout` instead.
- `onLayout` prop of `Resizable.Root` has been removed. Please use `Resizable.useLayoutChange` and `Resizable.useLayoutChanged` instead.
- The `as` prop of `Resizable.Item` has been removed. Instead, apply styling directly to `Resizable.Item`.
- The `defaultSize`, `minSize`, and `maxSize` props of `Resizable.Item` now support `%`, `rem`, and `vw` units. If you use a number, it will be converted from `%` to `px`, so you should change `30` to `"30%"`, etc.
- The `onCollapse` and `onExpand` props of `Resizable.Item` have been removed. Please use `onResize` on `Resizable.Item` instead.
- The `onDragging` prop of `Resizable.Trigger` has been removed.
