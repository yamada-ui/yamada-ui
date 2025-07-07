import type { BundledLanguage, CodeToHastOptionsCommon } from "shiki"
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers"
import { codeToHtml as originalCodeToHtml } from "shiki"

export async function codeToHtml(
  code: string,
  {
    lang,
    transformers = [],
    ...rest
  }: CodeToHastOptionsCommon<BundledLanguage>,
) {
  const html = await originalCodeToHtml(code, {
    lang,
    themes: { light: "one-light", dark: "one-dark-pro" },
    transformers: [
      transformerMetaHighlight(),
      transformerNotationDiff(),
      transformerNotationFocus(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
      ...transformers,
    ],
    ...rest,
  })

  return html.replace(/^<pre[^>]*>/, "").replace(/<\/pre>$/, "")
}
