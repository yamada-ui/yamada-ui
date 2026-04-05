import { beforeEach, describe, expect, test, vi } from "vitest"

vi.mock("prompts", () => ({ default: vi.fn() }))
vi.mock("../../../utils", async (importOriginal) => {
  const actual: any = await importOriginal()

  return {
    ...actual,
    getPackageManager: vi.fn().mockReturnValue("pnpm"),
    installDependencies: vi.fn(),
    packageAddArgs: vi.fn().mockReturnValue(["add"]),
  }
})
vi.mock("./get-workspaces", () => ({
  getWorkspaces: vi.fn(),
}))

import prompts from "prompts"
import {
  getPackageManager,
  installDependencies,
  packageAddArgs,
} from "../../../utils"
import { addPackage } from "./add-package"
import { getWorkspaces } from "./get-workspaces"

describe("workspace > add-package", () => {
  const spinner = {
    fail: vi.fn(),
    start: vi.fn(),
    succeed: vi.fn(),
    warn: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(getPackageManager).mockReturnValue("pnpm")
    vi.mocked(packageAddArgs).mockReturnValue(["add"])
  })

  test("should print manual command when no workspaces are found", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue([])

    await addPackage({
      cwd: "/repo",
      outdir: "packages/ui",
      packageName: "@scope/ui",
      spinner: spinner as any,
      yes: false,
    })

    expect(prompts).not.toHaveBeenCalled()
    expect(spinner.start).not.toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledWith("")
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('pnpm add "@scope/ui@workspace:*"'),
    )
  })

  test("should print commands for each workspace in yes mode", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue(["apps/web", "apps/docs"])

    await addPackage({
      cwd: "/repo",
      outdir: "packages/ui",
      packageName: "@scope/ui",
      spinner: spinner as any,
      yes: true,
    })

    expect(prompts).not.toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledWith(
      "\nRun the following commands in your applications:\n",
    )
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        'cd "apps/web" && pnpm add "@scope/ui@workspace:*"',
      ),
    )
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        'cd "apps/docs" && pnpm add "@scope/ui@workspace:*"',
      ),
    )
  })

  test("should exclude the newly created package from workspace choices", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue([
      "apps/web",
      "apps/docs",
      "packages/ui",
    ])
    vi.mocked(prompts).mockResolvedValue({ selectedWorkspaces: [] })

    await addPackage({
      cwd: "/repo",
      outdir: "packages/ui",
      packageName: "@scope/ui",
      spinner: spinner as any,
      yes: false,
    })

    const promptsCall = vi.mocked(prompts).mock.calls[0]![0] as any
    const choices = promptsCall.choices.map((c: any) => c.value)

    expect(choices).not.toContain("packages/ui")
    expect(choices).toContain("apps/web")
    expect(choices).toContain("apps/docs")
  })

  test("should exclude the newly created package (with ./ prefix) from workspace choices", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue(["apps/web", "packages/ui"])
    vi.mocked(prompts).mockResolvedValue({ selectedWorkspaces: [] })

    await addPackage({
      cwd: "/repo",
      outdir: "./packages/ui",
      packageName: "@scope/ui",
      spinner: spinner as any,
      yes: false,
    })

    const promptsCall = vi.mocked(prompts).mock.calls[0]![0] as any
    const choices = promptsCall.choices.map((c: any) => c.value)

    expect(choices).not.toContain("packages/ui")
    expect(choices).toContain("apps/web")
  })

  test("should install selected workspaces from prompt", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue(["apps/web", "apps/docs"])
    vi.mocked(prompts).mockResolvedValue({ selectedWorkspaces: ["apps/docs"] })
    vi.mocked(installDependencies).mockResolvedValue(undefined)

    await addPackage({
      cwd: "/repo",
      outdir: "packages/ui",
      packageName: "@scope/ui",
      spinner: spinner as any,
      yes: false,
    })

    expect(spinner.start).toHaveBeenCalledWith(
      "Installing UI package in selected workspaces",
    )
    expect(installDependencies).toHaveBeenCalledWith(
      ["@scope/ui@workspace:*"],
      { cwd: "/repo/apps/docs", exact: false },
    )
    expect(spinner.succeed).toHaveBeenCalledWith("Installation complete")
    expect(console.log).toHaveBeenCalledWith(
      '\nAdded "@scope/ui@workspace:*" to the following workspaces:\n',
    )
  })

  test("should report failed workspaces when installDependencies throws", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue(["apps/web"])
    vi.mocked(prompts).mockResolvedValue({ selectedWorkspaces: ["apps/web"] })
    vi.mocked(installDependencies).mockRejectedValue(new Error("boom"))

    await addPackage({
      cwd: "/repo",
      outdir: "packages/ui",
      packageName: "@scope/ui",
      spinner: spinner as any,
      yes: false,
    })

    expect(spinner.fail).toHaveBeenCalledWith(
      "Failed to install packages in workspaces.",
    )
    expect(console.log).toHaveBeenCalledWith(
      '\nFailed to install "@scope/ui@workspace:*" in the following workspaces:\n',
    )
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("apps/web"),
    )
  })
})
