export interface Config {
  components?: { ignore?: string[]; path?: string }
  hooks?: { ignore?: string[]; path?: string }
  monorepo?: boolean
  path?: string
  providers?: { ignore?: string[]; path?: string }
}

export interface Source {
  name: string
  content: string
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

export interface Data {
  sources: Source[]
  dependencies?: Dependencies
  dependents?: Dependents
}
