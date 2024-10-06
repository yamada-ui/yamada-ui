import type { GrayMatterFile } from "gray-matter"
import type { Locale } from "utils/i18n"
import { Octokit } from "@octokit/rest"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import { readFile, writeFile } from "fs/promises"
import matter from "gray-matter"
import { prettier } from "libs/prettier"

export type Input = Buffer | string
export type Data = GrayMatterFile<Input>["data"]
export type Content = GrayMatterFile<Input>["content"]

const COMMON_PARAMS = {
  ref: "main",
  owner: "yamada-ui",
  path: "",
  repo: "yamada-data",
}

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const toCamelCase = (value: {} & string) =>
  value.toLowerCase().replace(/-(.)/g, (_, group1) => group1.toUpperCase())

export interface Constant {
  [key: string]: any
}

export const getConstant = async (): Promise<Constant> => {
  const result: Constant = {}

  const { data } = await octokit.repos.getContent(COMMON_PARAMS)

  if (Array.isArray(data)) {
    await Promise.all(
      data.map(async ({ name, path }) => {
        try {
          const { data } = await octokit.repos.getContent({
            ...COMMON_PARAMS,
            path,
          })

          if ("content" in data) {
            const content = Buffer.from(data.content, "base64").toString(
              "utf-8",
            )

            name = name.replace(".json", "")
            name = toCamelCase(name)

            result[name] = JSON.parse(content)
          }
        } catch {}
      }),
    )
  }

  return result
}

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
