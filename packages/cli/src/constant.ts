/* eslint-disable perfectionist/sort-objects */
import type { UserConfig } from "./index.type"
import { splitVersion } from "./utils"

export const CONFIG_FILE_NAME = "ui.json"
export const REGISTRY_FILE_NAME = "registry.json"
export const THEME_PATH = "./theme"
export const DEFAULT_PACKAGE_NAME = "@workspaces/ui"
export const REGISTRY_URL = "https://v2.yamada-ui.com/registry/v2"
export const DEFAULT_PATH = {
  components: "./components",
  hooks: "./hooks",
  monorepo: "./workspaces/ui",
  polyrepo: "./ui",
  providers: "./providers",
}
export const SECTION_NAMES = ["components", "hooks", "providers"] as const
export const DEFAULT_CONFIG: UserConfig = {
  components: { overwrite: true },
  hooks: { overwrite: true },
  providers: { overwrite: true },
}
export const REQUIRED_DEPENDENCIES = [
  "react@^19",
  "react-dom@^19",
  // TODO: Once `@yamada-ui/react` releases v2, I'll add it.
  // "@yamada-ui/react@^2",
]
export const REQUIRED_DEV_DEPENDENCIES = [
  "@types/react@^19",
  "@types/react-dom@^19",
]
export const DEFAULT_PACKAGE_JSON = {
  version: "1.0.0",
  type: "module",
  private: true,
  scripts: {},
  exports: {
    ".": "./src/index.ts",
    "./components/*": "./src/components/*/index.ts",
    "./hooks/*": "./src/hooks/*/index.ts",
    "./providers/*": "./src/providers/*/index.ts",
  },
  dependencies: Object.fromEntries(
    REQUIRED_DEPENDENCIES.map((dependency) => splitVersion(dependency)),
  ),
  devDependencies: Object.fromEntries(
    REQUIRED_DEV_DEPENDENCIES.map((dependency) => splitVersion(dependency)),
  ),
}
export const TSCONFIG_JSON = {
  compilerOptions: {
    target: "ESNext",
    module: "ESNext",
    lib: ["DOM", "DOM.Iterable", "ESNext"],
    moduleResolution: "Bundler",
    moduleDetection: "force",
    jsx: "preserve",
    strict: true,
    declaration: true,
    declarationMap: true,
    esModuleInterop: true,
    isolatedModules: true,
    resolveJsonModule: true,
    incremental: false,
    noEmit: true,
    skipLibCheck: true,
    allowJs: true,
    allowSyntheticDefaultImports: true,
    noUncheckedSideEffectImports: true,
    noFallthroughCasesInSwitch: true,
    noUncheckedIndexedAccess: true,
  },
  include: ["src/**/*.ts", "src/**/*.tsx"],
  exclude: ["node_modules"],
}
