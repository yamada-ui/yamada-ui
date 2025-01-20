import type { Config } from "../utils/get-config.js"
import * as p from "@clack/prompts"
import c from "chalk"
import { existsSync } from "node:fs"
import { writeFile } from "node:fs/promises"
import path, { resolve } from "node:path"
import { z } from "zod"
import {
  CONFIG_FILE_NAME,
  DEFAULT_COMPONENTS,
  DEFAULT_HOOKS,
  DEFAULT_UTILS,
  getConfig,
  rawConfigSchema,
} from "../utils/get-config.js"
import { getProjectConfig } from "../utils/get-project-info.js"

const SUCCESS_MESSAGE = `${c.green("Success!")} Project initialization completed. You may now add components.`

const initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean(),
})

type InitOptions = z.infer<typeof initOptionsSchema>

export async function actionInit(opts: InitOptions) {
  try {
    const options = initOptionsSchema.parse(opts)
    const cwd = resolve(options.cwd)
    const skip = options.yes

    if (!existsSync(cwd)) {
      p.cancel(c.red(`The path ${cwd} does not exist. Please try again.`))
    }

    const projectConfig = await getProjectConfig(cwd)
    if (projectConfig) {
      await minimalConfig(cwd, projectConfig)
    } else {
      // Read config
      const existConfig = await getConfig(cwd)
      await promptConfig(cwd, existConfig, skip)
    }
  } catch (e) {
    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

export async function promptConfig(
  cwd: string,
  defaultConfig: Config | null,
  skip = false,
) {
  const highlight = (text: string) => c.cyan(text)

  // TODO: cancelling prompt
  const options = await p.group({
    aliasToComponents: () =>
      p.text({
        initialValue: defaultConfig?.outputs.components ?? DEFAULT_COMPONENTS,
        message: `Configure the import alias for ${highlight("components")}`,
      }),
    aliasToHooks: () =>
      p.text({
        initialValue: defaultConfig?.outputs.hooks ?? DEFAULT_HOOKS,
        message: `Configure the import alias for ${highlight("hooks")}`,
      }),
    aliasToUtils: () =>
      p.text({
        initialValue: defaultConfig?.outputs.utils ?? DEFAULT_UTILS,
        message: `Configure the import alias for ${highlight("utils")}`,
      }),
    dependenciesOfComponents: () =>
      p.select({
        initialValue:
          defaultConfig?.dependencies["yamada-ui"]?.components ?? true,
        message: `Do you want to install ${highlight("components")}?`,
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      }),
    dependenciesOfHooks: () =>
      p.select({
        initialValue: defaultConfig?.dependencies["yamada-ui"]?.hooks ?? true,
        message: `Do you want to install ${highlight("hooks")}?`,
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      }),
    dependenciesOfUtils: () =>
      p.select({
        initialValue: defaultConfig?.dependencies["yamada-ui"]?.utils ?? true,
        message: `Do you want to install ${highlight("utils")}?`,
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      }),
    externalDependencies: () =>
      p.select({
        initialValue: defaultConfig?.dependencies.external ?? true,
        message: `Do you want to install ${highlight("external")}?`,
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      }),
    tsx: () =>
      p.select({
        initialValue: defaultConfig?.tsx ?? true,
        message: `Would you like to use ${highlight("TypeScript")} (recommended)?`,
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      }),
    useClient: () =>
      p.select({
        initialValue: defaultConfig?.useClient ?? true,
        message: `Are you using ${highlight("React Server Components")}?`,
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      }),
    versionConflict: () =>
      p.select({
        initialValue: defaultConfig?.versionConflict ?? "prompt",
        message: `What should we do if there is a version conflict?`,
        options: [
          { label: "Overwrite", value: "overwrite" },
          { label: "Skip", value: "skip" },
          { label: "Prompt", value: "prompt" },
        ],
      }),
  })

  const config = rawConfigSchema.parse({
    dependencies: {
      external: options.externalDependencies,
      ["yamada-ui"]: {
        components: options.dependenciesOfComponents,
        hooks: options.dependenciesOfHooks,
        utils: options.dependenciesOfUtils,
      },
    },
    outputs: {
      components: options.aliasToComponents,
      hooks: options.aliasToHooks,
      utils: options.aliasToUtils,
    },
    tsx: options.tsx,
    useClient: options.useClient,
    versionConflict: options.versionConflict,
  })

  if (!skip) {
    const proceed = await p.confirm({
      initialValue: true,
      message: `Write configuration to ${highlight(CONFIG_FILE_NAME)}. Proceed?`,
    })

    if (!proceed) {
      process.exit(0)
    }
  }

  const s = p.spinner()
  try {
    s.start(`Writing ${CONFIG_FILE_NAME}...`)
    const targetPath = path.join(cwd, CONFIG_FILE_NAME)
    await writeFile(targetPath, JSON.stringify(config, null, 2), "utf-8")
    s.stop(`Completed to write ${highlight(CONFIG_FILE_NAME)}`)
    p.outro(SUCCESS_MESSAGE)
  } catch (e) {
    s.stop(`An error occurred`, 500)
    throw e
  }
}

export async function minimalConfig(cwd: string, defaultConfig: Config) {
  const highlight = (text: string) => c.cyan(text)

  const config = rawConfigSchema.parse({
    dependencies: defaultConfig.dependencies,
    outputs: defaultConfig.outputs,
    tsx: defaultConfig.tsx,
    useClient: defaultConfig.useClient,
    versionConflict: defaultConfig.versionConflict,
  })

  const s = p.spinner()

  try {
    s.start(`Writing ${CONFIG_FILE_NAME}...`)

    const targetPath = path.join(cwd, CONFIG_FILE_NAME)
    await writeFile(targetPath, JSON.stringify(config, null, 2), "utf-8")

    s.stop(`Completed to write ${highlight(CONFIG_FILE_NAME)}`)
    p.outro(SUCCESS_MESSAGE)
  } catch (e) {
    s.stop(`An error occurred`, 500)
    throw e
  }
}
