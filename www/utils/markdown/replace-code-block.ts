export function replaceCodeBlock(text: string) {
  try {
    text = text.replace(/```(\S+)(?: .+)*\s([^`]+)```/g, "```$1\n$2```")

    return text
  } catch {
    return text
  }
}
