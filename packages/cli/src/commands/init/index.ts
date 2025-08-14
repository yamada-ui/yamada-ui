import type { Config } from "../../index.type"
import boxen from "boxen"
import { Command } from "commander"
import { existsSync } from "fs"
import ora from "ora"
import path from "path"
import c from "picocolors"
import prompts from "prompts"
import {
  CONFIG_FILE_NAME,
  DEFAULT_PACKAGE_JSON,
  DEFAULT_PACKAGE_NAME,
  PATH,
  TSCONFIG_JSON,
} from "../../constant"
import {
  addWorkspace,
  format,
  getPackageJson,
  getPackageManager,
  installDependencies,
  requireDependencies,
  writeFileSafe,
} from "../../utils"
import { fetchRegistry } from "../../utils/registry"

interface Options {
  config: string
  cwd: string
}

export const init = new Command("init")
  .description("Initialize your project and install dependencies")
  .option("--cwd <path>", "Current working directory", process.cwd())
  .option("-c, --config <path>", "Path to the config file", CONFIG_FILE_NAME)
  .action(async function ({ config: configPath, cwd }: Options) {
    const spinner = ora()

    try {
      const start = process.hrtime.bigint()

      const configFileName = configPath.includes("/")
        ? configPath.split("/").at(-1)!
        : configPath
      const config: Config = {
        components: { ignore: [], path: "./components" },
        hooks: { ignore: [], path: "./hooks" },
        providers: { ignore: [], path: "./providers" },
      }

      configPath = path.resolve(cwd, configPath)

      let dependencies: string[] | undefined

      let {
        monorepo = true,
        outdir,
        packageName,
      } = await prompts([
        {
          type: "toggle",
          name: "monorepo",
          active: "Yes",
          inactive: "No",
          initial: true,
          message: `Would you like to use monorepo? (recommended)`,
        },
        {
          type: "text",
          name: "outdir",
          initial: (_, { monorepo }) =>
            monorepo ? PATH.MONOREPO : PATH.POLYREPO,
          message: (_, { monorepo }) =>
            monorepo
              ? `What is the path to the monorepo?`
              : `What is the path to the directory?`,
        },
        {
          type: (_, { monorepo }) => (monorepo ? "text" : null),
          name: "packageName",
          initial: DEFAULT_PACKAGE_NAME,
          message: "What is the package name?",
        },
      ])

      // eslint-disable-next-line no-control-regex
      outdir = outdir.replace(/\x17/g, "").trim()
      outdir ||= monorepo ? PATH.MONOREPO : PATH.POLYREPO
      // eslint-disable-next-line no-control-regex
      packageName = packageName.replace(/\x17/g, "").trim()
      packageName ||= DEFAULT_PACKAGE_NAME

      config.monorepo = monorepo
      config.path = outdir

      const { generate } = await prompts({
        type: "confirm",
        name: "generate",
        initial: true,
        message: `Generate ${c.cyan(configFileName)}. Proceed?`,
      })

      if (!generate) process.exit(0)

      if (existsSync(configPath)) {
        const { overwrite } = await prompts({
          type: "confirm",
          name: "overwrite",
          initial: false,
          message: `The config file already exists. Do you want to overwrite it?`,
        })

        if (!overwrite) process.exit(0)
      }

      spinner.start(`Generating ${c.cyan(configFileName)}`)

      await writeFileSafe(
        configPath,
        await format(JSON.stringify(config), { parser: "json" }),
      )

      spinner.succeed(`Generated ${c.cyan(configFileName)}`)

      if (monorepo) {
        const outdirPath = path.resolve(cwd, outdir)

        if (existsSync(outdirPath)) throw new Error(`${outdir} already exists`)

        const packageJson = { name: packageName, ...DEFAULT_PACKAGE_JSON }
        const tsconfigJson = { ...TSCONFIG_JSON }

        spinner.start("Fetching data")

        const registries = await fetchRegistry(["index"])
        const { sources } = registries[0]!

        spinner.succeed("Fetched data")

        const { generate } = await prompts({
          type: "confirm",
          name: "generate",
          initial: true,
          message: `Generate ${c.cyan(packageName)}. Proceed?`,
        })

        if (!generate) process.exit(0)

        spinner.start(`Generating ${c.cyan(packageName)}`)

        await Promise.all(
          [
            {
              content: await format(JSON.stringify(packageJson), {
                parser: "json",
              }),
              path: path.resolve(outdirPath, "package.json"),
            },
            {
              content: await format(JSON.stringify(tsconfigJson), {
                parser: "json",
              }),
              path: path.resolve(outdirPath, "tsconfig.json"),
            },
            ...(await Promise.all(
              sources.map(async ({ name, content }) => ({
                content: await format(content),
                path: path.resolve(outdirPath, "src", name),
              })),
            )),
          ].map(({ content, path }) => writeFileSafe(path, content)),
        )

        spinner.succeed(`Generated ${c.cyan(packageName)}`)

        spinner.start("Adding workspace")

        if (outdir.includes("/")) {
          const path = `${outdir.replace(/^\.\//, "").split("/")[0]}/**`

          await addWorkspace(cwd, path)
        } else {
          await addWorkspace(cwd, outdir)
        }

        spinner.succeed("Added workspace")

        const { install } = await prompts({
          type: "confirm",
          name: "install",
          initial: true,
          message: `The workspace is generated. Do you want to install dependencies?`,
        })

        if (install) dependencies = []
      } else {
        spinner.start("Getting package.json")

        const packageJson = await getPackageJson(cwd)
        const requiredDependencies = requireDependencies(packageJson, [
          "react",
          "react-dom",
          "@yamada-ui/react",
        ])
        const notInstalledDependencies = Object.entries(
          requiredDependencies,
        ).filter(([_, version]) => !version)

        spinner.succeed("Got package.json")

        if (notInstalledDependencies.length) {
          const dependencyNames = notInstalledDependencies.map(([name]) =>
            c.cyan(name),
          )

          const { install } = await prompts({
            type: "confirm",
            name: "install",
            initial: true,
            message: `The following dependencies are not installed: ${dependencyNames.join(", ")}. Do you want to install them?`,
          })

          if (install) dependencies = dependencyNames
        }
      }

      if (dependencies) {
        spinner.start("Installing dependencies")

        installDependencies(cwd, dependencies)

        spinner.succeed("Installed dependencies")
      }

      if (packageName) {
        const packageManager = getPackageManager()
        const command = packageManager === "npm" ? "install" : "add"

        console.log(
          boxen(
            `Run ${c.cyan(`${packageManager} ${command} "${packageName}@workspace:*"`)} in your application.`,
            {
              borderColor: "yellow",
              borderStyle: "round",
              margin: 1,
              padding: 1,
              textAlignment: "center",
            },
          ),
        )
      }

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log("\n", c.green(`Done in ${duration}s`))
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }
    }
  })
