import { existsSync } from "fs"
import path from "path"
import * as p from "@clack/prompts"
import c from "chalk"
import { Command } from "commander"
import pkg from "../package.json"
import type { Template } from "./utils"
import {
  initCLI,
  getPackageManager,
  validatePackageName,
  templates,
  createProject,
  isFolderEmpty,
  isWriteable,
  templateOptions,
} from "./utils"

export type Options = {
  javascript?: boolean
  typescript?: boolean
  template?: Template
  useNpm?: boolean
  usePnpm?: boolean
  useYarn?: boolean
  useBun?: boolean
  skipInstall?: boolean
  initGit?: boolean
}

const getProjectPath = async (_projectPath: string | undefined) => {
  let projectPath: string
  let projectName: string

  if (_projectPath) {
    projectPath = path.resolve(_projectPath)
    projectName = path.basename(projectPath)

    const errorMessages = validatePackageName(projectName)

    if (errorMessages.length)
      throw new Error(
        `Could not create a project called "${projectName}" because of npm naming restrictions`,
      )
  } else {
    projectPath = (await p.text({
      message: "What is your project named?",
      initialValue: "my-app",
      validate: (projectPath) => {
        const errorMessages = validatePackageName(
          path.basename(path.resolve(projectPath)),
        )

        if (errorMessages.length) return errorMessages[0]
      },
    })) as string

    projectPath = path.resolve(projectPath)
    projectName = path.basename(projectPath)
  }

  return { projectPath, projectName }
}

const getTemplate = async ({ template }: Options): Promise<Template> => {
  if (template) {
    if (!templates.includes(template))
      throw new Error(`Template "${template}" not found`)
  } else {
    template = (await p.select({
      message: "Which template do you use?",
      options: templateOptions,
    })) as Template
  }

  return template
}

const action = async (_projectPath: string | undefined, options: Options) => {
  let { skipInstall, initGit, javascript } = options

  p.intro(c.magenta(`Generating application with Yamada UI`))

  try {
    const pkgManager = getPackageManager(options)

    const { projectPath, projectName } = await getProjectPath(_projectPath)

    if (existsSync(projectPath) && !isFolderEmpty(projectPath))
      throw new Error(
        `The directory "${projectName}" contains files that could conflict`,
      )

    if (!(await isWriteable(path.dirname(projectPath)))) {
      throw new Error(
        "The provided path is not writable, please check folder permissions and try again. It is likely you do not have write permissions for this folder.",
      )
    }

    const template = await getTemplate(options)

    if (!skipInstall) {
      const runInstall = await p.confirm({
        message: `Install dependencies with ${pkgManager}?`,
        initialValue: true,
      })

      skipInstall = !runInstall
    }

    if (!initGit) {
      const runInit = await p.confirm({
        message: `Initialize a new git repository?`,
        initialValue: true,
      })

      initGit = !!runInit
    }

    await createProject(
      projectPath,
      projectName,
      template,
      !javascript,
      pkgManager,
      skipInstall,
      initGit,
    )

    p.outro(`${c.green(`Created`)} "${projectName}" at ${c.dim(projectPath)}\n`)
  } catch (e) {
    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

const run = async () => {
  await initCLI()

  const program = new Command(pkg.name)
    .name("create-yamada-app")
    .description(pkg.description)
    .version(pkg.version)
    .arguments("[path]")
    .usage(`${c.green("[path]")} [options]`)
    .option("-t, --template [name]", `An template to bootstrap the app with`)
    .option("-js, --javascript", `Initialize as a JavaScript project`)
    .option("-ts, --typescript", `Initialize as a TypeScript project`)
    .option(
      "--use-npm",
      `Explicitly tell the CLI to bootstrap the application using npm`,
    )
    .option(
      "--use-pnpm",
      `Explicitly tell the CLI to bootstrap the application using pnpm`,
    )
    .option(
      "--use-yarn",
      `Explicitly tell the CLI to bootstrap the application using Yarn`,
    )
    .option(
      "--use-bun",
      `Explicitly tell the CLI to bootstrap the application using Bun`,
    )
    .option("--init-git", `Explicitly tell the CLI to initialize git`)
    .option(
      "--skip-install",
      `Explicitly tell the CLI to skip installing packages`,
    )
    .action(action)

  program.parse()
}

run()
