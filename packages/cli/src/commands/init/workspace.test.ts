import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

vi.mock("../../utils", async (importOriginal) => {
  const actual: any = await importOriginal()
  return { ...actual, getPackageManager: vi.fn().mockReturnValue("pnpm") }
})

import { getPackageManager } from "../../utils"
import { getWorkspaces } from "./workspace"

describe("getWorkspaces", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-ws-"))
    vi.mocked(getPackageManager).mockReturnValue("pnpm")
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  function createWorkspace(name: string) {
    const wsDir = path.join(tempDir, "workspaces", name)
    mkdirSync(wsDir, { recursive: true })
    writeFileSync(
      path.join(wsDir, "package.json"),
      JSON.stringify({ name }),
      "utf-8",
    )
  }

  test("should parse block-sequence entries with inline comments", async () => {
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "packages:\n  - workspaces/* # existing workspaces\n",
      "utf-8",
    )
    createWorkspace("app")

    const result = await getWorkspaces(tempDir)
    expect(result).toContain(path.join("workspaces", "app"))
  })

  test("should parse flow-style sequence", async () => {
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "packages: [workspaces/*]\n",
      "utf-8",
    )
    createWorkspace("app")

    const result = await getWorkspaces(tempDir)
    expect(result).toContain(path.join("workspaces", "app"))
  })

  test("should read pnpm-workspace.yml (.yml extension)", async () => {
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yml"),
      "packages:\n  - workspaces/*\n",
      "utf-8",
    )
    createWorkspace("app")

    const result = await getWorkspaces(tempDir)
    expect(result).toContain(path.join("workspaces", "app"))
  })

  test("should prefer .yaml over .yml when both exist", async () => {
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "packages:\n  - workspaces/*\n",
      "utf-8",
    )
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yml"),
      "packages: []\n",
      "utf-8",
    )
    createWorkspace("app")

    const result = await getWorkspaces(tempDir)
    expect(result).toContain(path.join("workspaces", "app"))
  })

  test("should return empty array when no workspaces directories exist", async () => {
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "packages:\n  - workspaces/*\n",
      "utf-8",
    )

    const result = await getWorkspaces(tempDir)
    expect(result).toStrictEqual([])
  })

  test("should read workspaces from package.json for npm", async () => {
    vi.mocked(getPackageManager).mockReturnValue("npm")
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ workspaces: ["workspaces/*"] }),
      "utf-8",
    )
    createWorkspace("app")

    const result = await getWorkspaces(tempDir)
    expect(result).toContain(path.join("workspaces", "app"))
  })

  test("should read workspaces from package.json for bun", async () => {
    vi.mocked(getPackageManager).mockReturnValue("bun")
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ workspaces: ["workspaces/*"] }),
      "utf-8",
    )
    createWorkspace("app")

    const result = await getWorkspaces(tempDir)
    expect(result).toContain(path.join("workspaces", "app"))
  })

  test("should ignore pnpm-workspace.yaml for bun", async () => {
    vi.mocked(getPackageManager).mockReturnValue("bun")
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "packages:\n  - workspaces/*\n",
      "utf-8",
    )

    const result = await getWorkspaces(tempDir)
    expect(result).toStrictEqual([])
  })
})
