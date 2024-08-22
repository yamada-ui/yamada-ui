import type * as p from "@clack/prompts"
import type { templatePrompts, templates } from "."

type TextOptions = { type: "text" } & p.TextOptions
type SelectOptions = { type: "select" } & p.SelectOptions<any, any>
type ConfirmOptions = { type: "confirm" } & p.ConfirmOptions

export type PromptOptions = TextOptions | SelectOptions | ConfirmOptions

export type Prompts = Record<string, PromptOptions>

export type TemplatePrompts<Y extends Template = Template> = Record<
  keyof (typeof templatePrompts)[Y],
  boolean | string
>

export type InstallTemplate<Y extends Template = Template> = (
  projectPath: string,
  projectName: string,
  typescript: boolean,
  prompts: TemplatePrompts<Y>,
) => Promise<void>

export type InstallTemplates = {
  [K in Template]: InstallTemplate<K>
}

export type Template = (typeof templates)[number]

export type TemplateOption = { label: string; value: Template }
