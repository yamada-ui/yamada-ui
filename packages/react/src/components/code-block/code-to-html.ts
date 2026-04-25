interface CodeToHighlightedHtmlOptions {
  language: string
  highlight?: string
}

let modulesPromise:
  | Promise<{
      transformers: any[]
      codeToHtml: (code: string, options: any) => Promise<string>
    }>
  | undefined

const getModules = async () => {
  if (modulesPromise) return modulesPromise

  modulesPromise = Promise.all([
    import("shiki"),
    import("@shikijs/transformers"),
  ]).then(([shiki, transformers]) => ({
    codeToHtml: shiki.codeToHtml,
    transformers: [
      transformers.transformerMetaHighlight(),
      transformers.transformerNotationDiff(),
      transformers.transformerNotationFocus(),
      transformers.transformerNotationHighlight(),
      transformers.transformerNotationWordHighlight(),
    ],
  }))

  return modulesPromise
}

export async function codeToHighlightedHtml(
  code: string,
  { highlight, language }: CodeToHighlightedHtmlOptions,
) {
  const { codeToHtml, transformers } = await getModules()
  const html = await codeToHtml(code, {
    lang: language as any,
    meta: { __raw: highlight ?? "" },
    themes: { light: "one-light", dark: "one-dark-pro" },
    transformers,
  })

  return html
    .replace(/^<pre[^>]*><code[^>]*>/, "")
    .replace(/<\/code><\/pre>$/, "")
    .replace(/<\/span>\n(?=<span class="[^"]*\bline\b)/g, "</span>")
}
