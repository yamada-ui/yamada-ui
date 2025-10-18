import type { UserConfig } from "tsdown"
import { defineConfig } from "tsdown"

const sharedConfig: UserConfig = {
  target: "es2022",
  format: "esm",
  platform: "browser",
}

export default [
  defineConfig({
    ...sharedConfig,
    dts: { emitDtsOnly: true, resolve: true },
    entry: "node_modules/@yamada-ui/react/src/index.ts",
    outDir: "public/playground/types/@yamada-ui/react",
  }),
  defineConfig({
    ...sharedConfig,
    entry: "node_modules/@yamada-ui/react/src/index.ts",
    external: ["react", "react-dom"],
    inputOptions: {
      transform: {
        jsx: {
          runtime: "automatic",
        },
      },
    },
    minify: true,
    noExternal: [/^(?!react(?:\/.*)?$|react-dom(?:\/.*)?$).+/],
    outDir: "public/vendor/@yamada-ui/react",
    treeshake: true,
  }),
]
