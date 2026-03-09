---
"@yamada-ui/cli": minor
---

- Add --yes/-y auto-confirm support to the add/diff/init/theme/update CLI commands so scripted runs can bypass interactive prompts.
- Surface the previously missing non-interactive flags across add/diff/init/theme to keep automated and manual flows aligned.
