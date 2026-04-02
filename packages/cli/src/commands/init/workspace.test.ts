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

  function createPackage(relPath: string, name: string) {
    const pkgDir = path.join(tempDir, relPath)
    mkdirSync(pkgDir, { recursive: true })
    writeFileSync(
      path.join(pkgDir, "package.json"),
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

  test("should resolve nested directories with ** glob pattern", async () => {
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "packages:\n  - apps/**\n",
      "utf-8",
    )
    createPackage("apps/web", "web")
    createPackage("apps/mobile/app", "mobile-app")

    const result = await getWorkspaces(tempDir)
    expect(result).toContain(path.join("apps", "web"))
    expect(result).toContain(path.join("apps", "mobile", "app"))
  })

  test("should resolve prefix wildcard pattern like packages/ui-*", async () => {
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "packages:\n  - packages/ui-*\n",
      "utf-8",
    )
    createPackage("packages/ui-button", "ui-button")
    createPackage("packages/ui-input", "ui-input")
    createPackage("packages/core", "core")

    const result = await getWorkspaces(tempDir)
    expect(result).toContain(path.join("packages", "ui-button"))
    expect(result).toContain(path.join("packages", "ui-input"))
    expect(result).not.toContain(path.join("packages", "core"))
  })

  test("should resolve pattern with trailing slash", async () => {
    writeFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "packages:\n  - packages/*/\n",
      "utf-8",
    )
    createPackage("packages/alpha", "alpha")
    createPackage("packages/beta", "beta")

    const result = await getWorkspaces(tempDir)
    expect(result).toContain(path.join("packages", "alpha"))
    expect(result).toContain(path.join("packages", "beta"))
  })
})
