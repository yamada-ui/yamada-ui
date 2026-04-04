import type { Ora } from "ora"
import type { PackageManager } from "../../../utils"
import boxen from "boxen"
import path from "node:path"
import c from "picocolors"
import prompts from "prompts"
import {
  execFileAsync,
  getPackageManager,
  packageAddArgs,
} from "../../../utils"
import { getWorkspaces } from "./get-workspaces"

interface FailedWorkspace {
  error: unknown
  workspace: string
}

interface InstallWorkspacePackageResult {
  failedWorkspaces: FailedWorkspace[]
  succeededWorkspaces: string[]
}

interface AddWorkspacePackageOptions {
  cwd: string
  packageName: string
  spinner: Ora
  yes: boolean
}

export function getWorkspaceInstallCommand(packageName: string) {
  const packageManager = getPackageManager()
  const args = packageAddArgs(packageManager)

  return {
    args,
    command: `${packageManager} ${args.join(" ")} "${packageName}@workspace:*"`,
    packageManager,
  }
}

export async function installPackageInWorkspaces({
  cwd,
  packageManager,
  packageName,
  workspaces,
}: {
  cwd: string
  packageManager: PackageManager
  packageName: string
  workspaces: string[]
}): Promise<InstallWorkspacePackageResult> {
  const args = packageAddArgs(packageManager)
  const succeededWorkspaces: string[] = []
  const failedWorkspaces: FailedWorkspace[] = []

  for (const workspace of workspaces) {
    try {
      await execFileAsync(
        packageManager,
        [...args, `${packageName}@workspace:*`],
        {
          cwd: path.join(cwd, workspace),
        },
      )
      succeededWorkspaces.push(workspace)
    } catch (error) {
      failedWorkspaces.push({ error, workspace })
    }
  }

  return { failedWorkspaces, succeededWorkspaces }
}

function printWorkspaceInstallCommand(command: string) {
  console.log("")
  console.log(
    boxen(["Run", c.cyan(command), "in your application."].join(" "), {
      borderColor: "yellow",
      borderStyle: "round",
      padding: 1,
      textAlignment: "center",
    }),
  )
}

function printWorkspaceInstallCommands(command: string, workspaces: string[]) {
  console.log(`\nRun the following commands in your applications:\n`)
  workspaces.forEach((workspace) => {
    console.log(c.cyan(`cd ${workspace} && ${command}`))
  })
  console.log("")
}

async function promptWorkspaceSelection(
  packageName: string,
  workspaces: string[],
): Promise<string[]> {
  console.log("")

  const { selectedWorkspaces = [] } = await prompts({
    type: "multiselect",
    name: "selectedWorkspaces",
    choices: workspaces.map((workspace) => ({
      title: workspace,
      value: workspace,
    })),
    instructions: false,
    message: `Which workspaces would you like to add "${packageName}" to? (Press <space> to toggle)`,
  })

  return selectedWorkspaces
}

function reportWorkspaceInstallation(
  failedWorkspaces: FailedWorkspace[],
  packageName: string,
  spinner: Ora,
  succeededWorkspaces: string[],
) {
  if (failedWorkspaces.length === 0) {
    spinner.succeed("Installation complete")
  } else if (succeededWorkspaces.length === 0) {
    spinner.fail("Failed to install packages in workspaces.")
  } else {
    spinner.warn("Installation completed with some errors.")
  }

  if (succeededWorkspaces.length > 0) {
    console.log(
      `\nAdded "${packageName}@workspace:*" to the following workspaces:\n`,
    )
    succeededWorkspaces.forEach((workspace) => {
      console.log(`  ${c.green("✔")} ${c.cyan(workspace)}`)
    })
    console.log("")
  }

  if (failedWorkspaces.length > 0) {
    console.log(
      `\nFailed to install "${packageName}@workspace:*" in the following workspaces:\n`,
    )
    failedWorkspaces.forEach(({ error, workspace }) => {
      console.log(
        `  ${c.red("✘")} ${c.cyan(workspace)}: ${c.red(String(error))}`,
      )
    })
    console.log("")
  }
}

export async function addWorkspacePackage({
  cwd,
  packageName,
  spinner,
  yes,
}: AddWorkspacePackageOptions) {
  const { command, packageManager } = getWorkspaceInstallCommand(packageName)
  const workspaces = await getWorkspaces(cwd)

  if (workspaces.length === 0) {
    printWorkspaceInstallCommand(command)
    return
  }

  if (yes) {
    printWorkspaceInstallCommands(command, workspaces)
    return
  }

  const selectedWorkspaces = await promptWorkspaceSelection(
    packageName,
    workspaces,
  )

  if (selectedWorkspaces.length === 0) {
    console.log(
      c.yellow("\nNo workspaces selected. Skipping automatic installation.\n"),
    )
    return
  }

  spinner.start("Installing UI package in selected workspaces")

  const { failedWorkspaces, succeededWorkspaces } =
    await installPackageInWorkspaces({
      cwd,
      packageManager,
      packageName,
      workspaces: selectedWorkspaces,
    })

  reportWorkspaceInstallation(
    failedWorkspaces,
    packageName,
    spinner,
    succeededWorkspaces,
  )
}
