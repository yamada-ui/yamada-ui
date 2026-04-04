import { beforeEach, describe, expect, test, vi } from "vitest"

vi.mock("prompts", () => ({ default: vi.fn() }))
vi.mock("../../../utils", async (importOriginal) => {
  const actual: any = await importOriginal()

  return {
    ...actual,
    execFileAsync: vi.fn(),
    getPackageManager: vi.fn().mockReturnValue("pnpm"),
    packageAddArgs: vi.fn().mockReturnValue(["add"]),
  }
})
vi.mock("./get-workspaces", () => ({
  getWorkspaces: vi.fn(),
}))

import prompts from "prompts"
import {
  execFileAsync,
  getPackageManager,
  packageAddArgs,
} from "../../../utils"
import { getWorkspaces } from "./get-workspaces"
import {
  addWorkspacePackage,
  getWorkspaceInstallCommand,
  installPackageInWorkspaces,
} from "./install"

describe("workspace-install", () => {
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

  test("should build workspace install command from package manager args", () => {
    const result = getWorkspaceInstallCommand("@scope/ui")

    expect(result).toStrictEqual({
      args: ["add"],
      command: 'pnpm add "@scope/ui@workspace:*"',
      packageManager: "pnpm",
    })
  })

  test("should collect succeeded and failed workspaces when installing", async () => {
    vi.mocked(execFileAsync)
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockRejectedValueOnce(new Error("boom"))

    const result = await installPackageInWorkspaces({
      cwd: "/repo",
      packageManager: "pnpm",
      packageName: "@scope/ui",
      workspaces: ["apps/web", "apps/docs"],
    })

    expect(execFileAsync).toHaveBeenNthCalledWith(
      1,
      "pnpm",
      ["add", "@scope/ui@workspace:*"],
      { cwd: "/repo/apps/web" },
    )
    expect(execFileAsync).toHaveBeenNthCalledWith(
      2,
      "pnpm",
      ["add", "@scope/ui@workspace:*"],
      { cwd: "/repo/apps/docs" },
    )
    expect(result.succeededWorkspaces).toStrictEqual(["apps/web"])
    expect(result.failedWorkspaces).toHaveLength(1)
    expect(result.failedWorkspaces[0]?.workspace).toBe("apps/docs")
  })

  test("should print manual command when no workspaces are found", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue([])

    await addWorkspacePackage({
      cwd: "/repo",
      packageName: "@scope/ui",
      spinner: spinner as any,
      yes: false,
    })

    expect(prompts).not.toHaveBeenCalled()
    expect(spinner.start).not.toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledWith("")
    expect(vi.mocked(console.log).mock.calls[1]?.[0]).toContain(
      'pnpm add "@scope/ui@workspace:*"',
    )
  })

  test("should print commands for each workspace in yes mode", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue(["apps/web", "apps/docs"])

    await addWorkspacePackage({
      cwd: "/repo",
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
        'cd apps/web && pnpm add "@scope/ui@workspace:*"',
      ),
    )
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        'cd apps/docs && pnpm add "@scope/ui@workspace:*"',
      ),
    )
  })

  test("should install selected workspaces from prompt", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue(["apps/web", "apps/docs"])
    vi.mocked(prompts).mockResolvedValue({ selectedWorkspaces: ["apps/docs"] })
    vi.mocked(execFileAsync).mockResolvedValue({
      stderr: "",
      stdout: "",
    } as any)

    await addWorkspacePackage({
      cwd: "/repo",
      packageName: "@scope/ui",
      spinner: spinner as any,
      yes: false,
    })

    expect(spinner.start).toHaveBeenCalledWith(
      "Installing UI package in selected workspaces",
    )
    expect(spinner.succeed).toHaveBeenCalledWith("Installation complete")
    expect(execFileAsync).toHaveBeenCalledWith(
      "pnpm",
      ["add", "@scope/ui@workspace:*"],
      { cwd: "/repo/apps/docs" },
    )
    expect(console.log).toHaveBeenCalledWith(
      '\nAdded "@scope/ui@workspace:*" to the following workspaces:\n',
    )
  })

  test("should report failed workspaces through the shared console logger", async () => {
    vi.mocked(getWorkspaces).mockResolvedValue(["apps/web"])
    vi.mocked(prompts).mockResolvedValue({ selectedWorkspaces: ["apps/web"] })
    vi.mocked(execFileAsync).mockRejectedValue(new Error("boom"))

    await addWorkspacePackage({
      cwd: "/repo",
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
