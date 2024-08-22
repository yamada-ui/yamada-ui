import { gatsby } from "./gatsby"
import { hono } from "./hono"
import type {
  InstallTemplates,
  Prompts,
  Template,
  TemplateOption,
} from "./index.types"
import { next } from "./next"
import { remix } from "./remix"
import { getTemplatePrompts } from "./utils"
import { vite } from "./vite"

export type { Template }

export { getTemplatePrompts }

export const templates = ["next", "vite", "remix", "hono", "gatsby"] as const

export const templatePrompts = {
  next: next.prompts,
  vite: vite.prompts,
  remix: remix.prompts,
  hono: hono.prompts,
  gatsby: gatsby.prompts,
} as const satisfies Record<Template, Prompts>

export const installTemplate: InstallTemplates = {
  next: next.install,
  vite: vite.install,
  remix: remix.install,
  hono: hono.install,
  gatsby: gatsby.install,
}

export const templateOptions: TemplateOption[] = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Remix", value: "remix" },
  { label: "Hono", value: "hono" },
  { label: "Gatsby", value: "gatsby" },
]
