import type { Ora } from "ora"
import boxen from "boxen"
import path from "node:path"
import c from "picocolors"
import prompts from "prompts"
import {
  getPackageManager,
  installDependencies,
  packageAddArgs,
} from "../../../utils"
import { getWorkspaces } from "./get-workspaces"

interface AddPackageOptions {
  cwd: string
  outdir: string
  packageName: string
  spinner: Ora
  yes: boolean
}

export async function addPackage({
  cwd,
  outdir,
  packageName,
  spinner,
  yes,
}: AddPackageOptions) {
  const packageManager = getPackageManager()
  const command = `${packageManager} ${packageAddArgs(packageManager).join(" ")} "${packageName}@workspace:*"`
  const normalizedOutdir = path
    .normalize(outdir.replace(/^\.\//, ""))
    .replace(/\\/g, "/")
  const workspaces = await getWorkspaces(cwd, packageManager).then(
    (workspaces) =>
      workspaces.filter(
        (workspace) => workspace.replace(/\\/g, "/") !== normalizedOutdir,
      ),
  )

  if (workspaces.length === 0) {
    console.log("")
    console.log(
      boxen(["Run", c.cyan(command), "in your application."].join(" "), {
        borderColor: "yellow",
        borderStyle: "round",
        padding: 1,
        textAlignment: "center",
      }),
    )
    return
  }

  if (yes) {
    // With --yes, print commands instead of installing automatically.
    // This CLI is designed to be run by LLMs, so we let the LLM decide
    // where to install rather than managing that logic here.
    console.log(`\nRun the following commands in your applications:\n`)
    for (const workspace of workspaces) {
      console.log(c.cyan(`cd "${workspace}" && ${command}`))
    }
    console.log("")
    return
  }

  const { selectedWorkspaces = [] } = await prompts({
    type: "multiselect",
    name: "selectedWorkspaces",
    choices: workspaces.map((workspace) => ({
      title: workspace,
      value: workspace,
    })),
    instructions: false,
    message: `Which workspaces would you like to add "${packageName}" to?`,
  })

  if (selectedWorkspaces.length === 0) {
    console.log(
      c.yellow("\nNo workspaces selected. Skipping automatic installation.\n"),
    )
    return
  }

  spinner.start("Installing UI package in selected workspaces")

  const succeededWorkspaces: string[] = []
  const failedWorkspaces: string[] = []

  for (const workspace of selectedWorkspaces) {
    try {
      await installDependencies([`${packageName}@workspace:*`], {
        cwd: path.join(cwd, workspace),
        exact: false,
      })
      succeededWorkspaces.push(workspace)
    } catch {
      failedWorkspaces.push(workspace)
    }
  }

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
    for (const workspace of succeededWorkspaces) {
      console.log(`  ${c.green("✔")} ${c.cyan(workspace)}`)
    }
    console.log("")
  }

  if (failedWorkspaces.length > 0) {
    console.log(
      `\nFailed to install "${packageName}@workspace:*" in the following workspaces:\n`,
    )
    for (const workspace of failedWorkspaces) {
      console.log(`  ${c.red("✘")} ${c.cyan(workspace)}`)
    }
    console.log("")
  }
}
