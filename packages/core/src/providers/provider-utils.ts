import type { Environment } from "./environment-provider"

export const preventTransition = (environment: Environment) => {
  const { getDocument, getWindow } = environment
  const win = getWindow()
  const doc = getDocument()

  if (!doc) return

  const css = doc.createElement("style")

  const node = doc.createTextNode(
    `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
  )

  css.appendChild(node)

  doc.head.appendChild(css)

  return () => {
    const forceReflow = () => win?.getComputedStyle(doc.body)

    forceReflow()

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(css)
      })
    })
  }
}
