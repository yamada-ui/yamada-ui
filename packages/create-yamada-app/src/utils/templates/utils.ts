import path from "path"
import * as p from "@clack/prompts"
import type { Prompts, Template, TemplatePrompts } from "./index.types"
import { templatePrompts } from "."

export const getTemplatePrompts = async <Y extends Template = Template>(
  template: Y,
) => {
  const result: Record<string, boolean | string> = {}

  for await (const [key, { type, ...rest }] of Object.entries(
    templatePrompts[template] as Prompts,
  )) {
    result[key] = (await p[type](rest as any)) as boolean | string
  }

  return result as TemplatePrompts<Y>
}

export const templatePath = path.join(__dirname, "..", "..", "templates")
