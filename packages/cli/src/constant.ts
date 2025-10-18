/* eslint-disable perfectionist/sort-objects */
import type { UserConfig } from "./index.type"

export const CONFIG_FILE_NAME = "ui.json"
export const REGISTRY_FILE_NAME = "registry.json"
export const DEFAULT_PACKAGE_NAME = {
  ui: "@workspaces/ui",
  theme: "@workspaces/theme",
}
export const REGISTRY_URL = "https://yamada-ui.com/registry/v2"
export const DEFAULT_PATH = {
  components: "./components",
  hooks: "./hooks",
  providers: "./providers",
  ui: {
    monorepo: "./workspaces/ui",
    polyrepo: "./components/ui",
  },
  theme: {
    monorepo: "./workspaces/theme",
    polyrepo: "./theme",
  },
}
export const SECTION_NAMES = ["components", "hooks", "providers"] as const
export const DEFAULT_CONFIG: UserConfig = {
  $schema: `${REGISTRY_URL}/config.schema.json`,
  components: { overwrite: true },
  hooks: { overwrite: true },
  providers: { overwrite: true },
}
export const REQUIRED_DEPENDENCIES = {
  ui: ["react@^19", "react-dom@^19", "@yamada-ui/react@^2"],
  theme: ["@yamada-ui/react@^2"],
}
export const REQUIRED_DEV_DEPENDENCIES = {
  ui: ["@types/react@^19", "@types/react-dom@^19"],
  theme: [],
}
export const DEFAULT_PACKAGE_JSON = {
  version: "1.0.0",
  type: "module",
  private: true,
  scripts: {},
}
export const DEFAULT_PACKAGE_JSON_EXPORTS = {
  ui: {
    tsx: {
      ".": "./src/index.ts",
      "./components/*": "./src/components/*/index.ts",
      "./hooks/*": "./src/hooks/*/index.ts",
      "./providers/*": "./src/providers/*/index.ts",
    },
    jsx: {
      ".": "./src/index.js",
      "./components/*": "./src/components/*/index.js",
      "./hooks/*": "./src/hooks/*/index.js",
      "./providers/*": "./src/providers/*/index.js",
    },
  },
  theme: {
    tsx: {
      ".": "./src/index.ts",
    },
    jsx: {
      ".": "./src/index.js",
    },
  },
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
