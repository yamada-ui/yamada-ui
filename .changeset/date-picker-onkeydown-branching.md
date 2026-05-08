---
"@yamada-ui/react": patch
---

Fix DatePicker `onKeyDown` to branch on the actual mode (range / multiple / single) instead of the current value type, so Enter and Backspace work when no value is set yet. Also pass locale through `dayjs(value).locale(locale)` instead of `dayjs(value, locale)` which mistakenly treats locale as a format string.
