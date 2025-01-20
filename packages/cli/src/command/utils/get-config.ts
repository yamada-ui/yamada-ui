import { cosmiconfig } from "cosmiconfig"
import { resolve } from "node:path"
import { loadConfig } from "tsconfig-paths"
import { z } from "zod"

export const CONFIG_FILE_NAME = "ui.json"

export const DEFAULT_COMPONENTS = "@/components"
export const DEFAULT_UTILS = "@/utils"
export const DEFAULT_HOOKS = "@/hooks"

const explorer = cosmiconfig("components", {
  searchPlaces: [CONFIG_FILE_NAME],
})

export const rawConfigSchema = z
  .object({
    dependencies: z.object({
      external: z.boolean(),
      ["yamada-ui"]: z.object({
        components: z.boolean(),
        hooks: z.boolean(),
        utils: z.boolean(),
      }),
    }),
    outputs: z.object({
      components: z.string(),
      hooks: z.string(),
      utils: z.string(),
    }),
    tsx: z.boolean(),
    useClient: z.boolean(),
    versionConflict: z.union([
      z.literal("overwrite"),
      z.literal("skip"),
      z.literal("prompt"),
    ]),
  })
  .strict()

export type RawConfig = z.infer<typeof rawConfigSchema>

export const configSchema = rawConfigSchema.extend({
  resolvedPaths: z.object({
    components: z.string(),
    hooks: z.string(),
    utils: z.string(),
  }),
})

export type Config = z.infer<typeof configSchema>

export async function getConfig(cwd: string) {
  const config = await getRawConfig(cwd)

  if (!config) return null

  // TODO outputPath
  return resolveConfigPaths(cwd, config)
}

export function resolveConfigPaths(cwd: string, config: RawConfig) {
  const tsConfig = loadConfig(cwd)

  if (tsConfig.resultType === "failed") {
    throw new Error(
      `Failed to load ${config.tsx ? "tsconfig" : "jsconfig"}.json. ${
        tsConfig.message
      }`.trim(),
    )
  }

  return configSchema.parse({
    ...config,
    resolvedPaths: {
      components: resolve(cwd, config.outputs.components),
      hooks: resolve(cwd, config.outputs.hooks),
      utils: resolve(cwd, config.outputs.utils),
    },
  })
}

export async function getRawConfig(cwd: string): Promise<null | RawConfig> {
  try {
    const result = await explorer.search(cwd)

    if (!result) return null

    return rawConfigSchema.parse(result.config)
  } catch {
    throw new Error(`Invalid configuration found in ${cwd}/components.json.`)
  }
}
