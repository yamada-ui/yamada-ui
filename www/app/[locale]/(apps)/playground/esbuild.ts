import * as esbuild from "esbuild-wasm"
import { MISC_SOURCE } from "./constants"
import {
  DAYJS_VERSION,
  ESBUILD_VERSION,
  FAKER_VERSION,
  LUCIDE_LAB_VERSION,
  MOTION_VERSION,
  REACT_HOOK_FORM_VERSION,
  REACT_VERSION,
  YAMADA_UI_VERSION,
} from "./versions"

let initPromise: null | Promise<void> = null

const CDN_MODULES = {
  "@faker-js/faker": {
    packageName: "@faker-js/faker",
    version: FAKER_VERSION,
  },
  "@lucide/lab": {
    packageName: "@lucide/lab",
    version: LUCIDE_LAB_VERSION,
  },
  dayjs: {
    packageName: "dayjs",
    version: DAYJS_VERSION,
  },
  "motion/react": {
    packageName: "motion",
    subpath: "react",
    version: MOTION_VERSION,
  },
  "react-hook-form": {
    packageName: "react-hook-form",
    version: REACT_HOOK_FORM_VERSION,
  },
} as const

type CdnModuleName = keyof typeof CDN_MODULES

function buildEsmShUrl(
  packageName: string,
  version: string,
  subpath?: string,
): string {
  const baseUrl = `https://esm.sh/${packageName}@${version}`

  return subpath ? `${baseUrl}/${subpath}` : baseUrl
}

export function getCdnModuleUrl(moduleName: CdnModuleName): string {
  const cdnModule = CDN_MODULES[moduleName]

  return buildEsmShUrl(
    cdnModule.packageName,
    cdnModule.version,
    "subpath" in cdnModule ? cdnModule.subpath : undefined,
  )
}

const LEGACY_GLOBALS_PRELUDE = `import { burger as lucideBurger } from "@lucide/lab"
import { faker as fakerExport } from "@faker-js/faker"
import dayjsDefault from "dayjs"
import { AnimatePresence as motionAnimatePresence } from "motion/react"
import { useForm as rhfUseForm } from "react-hook-form"
import * as miscExports from "@/misc"

Object.assign(globalThis, {
  ...miscExports,
  AnimatePresence: motionAnimatePresence,
  burger: lucideBurger,
  dayjs: dayjsDefault,
  faker: fakerExport,
  useForm: rhfUseForm,
})
`

function initEsbuild(): Promise<void> {
  if (!initPromise) {
    initPromise = esbuild.initialize({
      wasmURL: `https://unpkg.com/esbuild-wasm@${ESBUILD_VERSION}/esbuild.wasm`,
    })
  }
  return initPromise
}

export function useEsbuild(): void {
  if (!initPromise) {
    throw initEsbuild()
  }
}

function createCdnPlugin(): esbuild.Plugin {
  return {
    name: "cdn-resolver",
    setup(build) {
      build.onResolve({ filter: /^@\/misc$/ }, () => ({
        namespace: "playground-virtual",
        path: "misc",
      }))
      build.onLoad(
        { filter: /^misc$/, namespace: "playground-virtual" },
        () => ({
          contents: MISC_SOURCE,
          loader: "tsx",
        }),
      )

      build.onResolve({ filter: /^react$/ }, () => ({
        external: true,
        path: `https://esm.sh/react@${REACT_VERSION}`,
      }))
      build.onResolve({ filter: /^react\/(.*)/ }, (args) => ({
        external: true,
        path: `https://esm.sh/react@${REACT_VERSION}/${args.path.replace("react/", "")}`,
      }))
      build.onResolve({ filter: /^react-dom(.*)/ }, (args) => ({
        external: true,
        path: `https://esm.sh/react-dom@${REACT_VERSION}${args.path.replace("react-dom", "")}`,
      }))
      build.onResolve({ filter: /^@yamada-ui\/(.*)/ }, (args) => ({
        external: true,
        path: `https://esm.sh/${args.path}@${YAMADA_UI_VERSION}`,
      }))

      for (const moduleName of Object.keys(CDN_MODULES) as CdnModuleName[]) {
        build.onResolve(
          {
            filter: new RegExp(
              `^${moduleName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
            ),
          },
          () => ({
            external: true,
            path: getCdnModuleUrl(moduleName as keyof typeof CDN_MODULES),
          }),
        )
      }
    },
  }
}

export async function compile(code: string): Promise<string> {
  await initEsbuild()
  const source = `${LEGACY_GLOBALS_PRELUDE}\n${code}`
  const result = await esbuild.build({
    bundle: true,
    format: "esm",
    plugins: [createCdnPlugin()],
    stdin: { contents: source, loader: "tsx" },
    write: false,
  })
  const output = result.outputFiles[0]
  if (!output) throw new Error("No output from esbuild")
  return output.text
}
