---
"@yamada-ui/react": patch
---

Fix DatePicker `multiple` mode so pressing `Enter` on an already-selected date in the input no longer removes it from the value array. The Enter handler now appends only when the date is not already selected and the `max` limit has not been reached, instead of toggling via the shared calendar-cell logic.
