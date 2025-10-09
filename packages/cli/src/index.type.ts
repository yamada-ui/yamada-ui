import type { Dict } from "@yamada-ui/utils"

export interface SectionConfig {
  dependencies?: boolean
  dependents?: boolean
  overwrite?: boolean
  path?: string
}

export interface ThemeConfig {
  path?: string
}

export interface LintConfig {
  enabled?: boolean
}

export interface FormatConfig {
  configPath?: null | string
  enabled?: boolean
}

export interface UserConfig {
  $schema?: string
  components?: SectionConfig
  format?: FormatConfig
  hooks?: SectionConfig
  jsx?: boolean
  lint?: LintConfig
  monorepo?: boolean
  path?: string
  providers?: SectionConfig
  theme?: ThemeConfig
}

export interface SectionConfigWithPaths extends SectionConfig {
  path: string
  resolvedPath: string
  section: Section
}

export interface Paths {
  src: string
  index: string
  registry: string
  root: string
}

export interface Config extends UserConfig {
  cwd: string
  getSection: (value?: string) => SectionConfigWithPaths | undefined
  getSectionPath: (section: Section) => string
  getSectionResolvedPath: (section: Section) => string
  isSection: (section: string) => section is Section
  paths: { theme: Paths; ui: Paths }
}

export type RegistrySection =
  | "components"
  | "hooks"
  | "providers"
  | "root"
  | "theme"

export type Section = Exclude<RegistrySection, "root" | "theme">
export interface Source {
  name: string
  content?: string
  data?: Dict[]
  template?: string
}

export interface Dependents {
  components: string[]
  hooks: string[]
  providers: string[]
}

export interface Dependencies {
  components: string[]
  externals: string[]
  hooks: string[]
  providers: string[]
}

export interface Registry {
  section: RegistrySection
  sources: Source[]
  dependencies?: Dependencies
  dependents?: Dependents
}

export interface Registries {
  [key: string]: Registry
}

export interface WantedVersion {
  wanted: string
  current?: string
}

export type PackageNameWithVersion = string | (WantedVersion & { name: string })
