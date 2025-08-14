/* eslint-disable perfectionist/sort-objects */
export const CONFIG_FILE_NAME = "ui.json"
export const DEFAULT_PACKAGE_NAME = "@workspaces/ui"
export const REGISTRY_URL = "https://v2.yamada-ui.com/registry/v2"
export const PATH = {
  COMPONENTS: "./components",
  HOOKS: "./hooks",
  MONOREPO: "./workspaces/ui",
  POLYREPO: "./ui",
  PROVIDERS: "./providers",
}
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
  dependencies: {
    react: ">=19",
    "react-dom": ">=19",
    "@yamada-ui/react": ">=2",
  },
  devDependencies: {
    "@types/react": ">=19",
    "@types/react-dom": ">=19",
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
