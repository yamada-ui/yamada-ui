---
"@yamada-ui/react": patch
---

Fixed an issue where components such as `PasswordInput` and `NativeSelect` that use `InputGroup` internally did not apply spacing correctly when the `variant` was set to `"flushed"`.
