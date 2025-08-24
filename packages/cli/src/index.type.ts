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

export interface Config extends UserConfig {
  src: boolean
  cwd: string
  getSection: (value?: string) => SectionConfigWithPaths | undefined
  getSectionPath: (section: Section) => string
  getSectionResolvedPath: (section: Section) => string
  indexPath: string
  isSection: (section: string) => section is Section
  registryPath: string
  rootPath: string
  srcPath: string
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
