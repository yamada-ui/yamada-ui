---
"@yamada-ui/react": minor
---

Added a condition to change the background color of components such as `Input` and `Checkbox` using [container style queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) when the variant of `Form` or `Fieldset` is set to `panel` or `elevated`. However, this condition is not supported by some browsers, so developers need to style them manually for unsupported browsers.
