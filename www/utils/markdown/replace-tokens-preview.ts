export function replaceTokensPreview(text: string) {
  try {
    text = text.replace(/<TokensPreview.*\/>/g, "")

    return text
  } catch {
    return text
  }
}
