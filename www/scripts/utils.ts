import type { GrayMatterFile } from "gray-matter"
import type { Locale } from "utils/i18n"
import { CONSTANT } from "constant"
import { readFile, writeFile } from "fs/promises"
import matter from "gray-matter"
import { prettier } from "libs/prettier"

export type Input = Buffer | string
export type Data = GrayMatterFile<Input>["data"]
export type Content = GrayMatterFile<Input>["content"]

export const getMDXFileName = (fileName: string, locale: Locale) => {
  if (locale !== CONSTANT.I18N.DEFAULT_LOCALE) fileName += `.${locale}`

  return fileName + ".mdx"
}

export const getMDXFile = async (path: string) => {
  const file = await readFile(path, "utf8")

  return matter(file)
}

export const writeMDXFile = async (
  path: string,
  data: Data,
  content: Content,
) => {
  let file = matter.stringify(content, data)

  file = await prettier(file)

  await writeFile(path, file)
}
