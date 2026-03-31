"use client"

import type { Options } from "prettier"
import * as parserBabel from "prettier/plugins/babel"
import * as prettierPluginEstree from "prettier/plugins/estree"
import * as parserTypeScript from "prettier/plugins/typescript"
import * as prettier from "prettier/standalone"
import config from "../../../../../packages/workspace/src/prettier/config"

export async function format(content: string, options?: Options) {
  try {
    return await prettier.format(content, {
      ...config,
      parser: "typescript",
      plugins: [parserBabel, parserTypeScript, prettierPluginEstree],
      ...options,
    })
  } catch {
    return content
  }
}
