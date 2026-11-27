import type { ThemeToken } from "@yamada-ui/react"
import type { Doc } from "#velite"
import { docs } from "#velite"

export { type DocMap, flattenDocMap, getDocMap } from "./doc-map"

interface Dependencies {
  components: string[]
  hooks: string[]
}

interface Dependents extends Dependencies {}

export interface Relations {
  [key: string]: {
    dependencies?: Dependencies
    dependents?: Dependents
    resembles?: string[]
  }
}

interface Prop {
  description: string
  required: boolean
  type: string
  defaultValue?: string
  deprecated?: string
  see?: string
}

export interface Props {
  [key: string]: Prop
}

export interface Namespace {
  [key: string]: {
    [key: string]: Prop
  }
}

export interface MdnDoc {
  deprecated: boolean
  description: string
  experimental: boolean
  see?: string
}

export interface MdnDocs {
  [key: string]: MdnDoc
}

export interface StyleConfig {
  as?: boolean
  docs?: MdnDocs
  properties?: string[]
  shorthands?: string[]
  token?: ThemeToken
  type?: string
}

export function getDocs(locale: string): Doc[] {
  return docs.filter((doc) => doc.locale === locale)
}
