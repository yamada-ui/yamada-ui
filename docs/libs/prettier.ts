import { format, resolveConfig } from 'prettier'

export const prettier = async (content: string) => {
  const prettierConfig = await resolveConfig(process.cwd())

  try {
    return format(content, {
      ...prettierConfig,
      parser: 'mdx',
    })
  } catch {
    return content
  }
}
