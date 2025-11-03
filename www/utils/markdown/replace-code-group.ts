export function replaceCodeGroup(text: string) {
  try {
    text = text.replace(/:::code-group\s+([\s\S]+?)\s+:::/g, "$1")

    return text
  } catch {
    return text
  }
}
