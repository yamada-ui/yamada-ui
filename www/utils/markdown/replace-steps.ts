export function replaceSteps(text: string) {
  try {
    text = text.replace(/::::steps\s+([\s\S]+?)\s+::::/g, "$1")

    return text
  } catch {
    return text
  }
}
