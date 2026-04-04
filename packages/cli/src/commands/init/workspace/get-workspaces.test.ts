import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import { getWorkspaces } from "./get-workspaces"

describe("getWorkspaces", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-ws-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  function createPackage(relPath: string, name: string) {
    const pkgDir = path.join(tempDir, relPath)
    mkdirSync(pkgDir, { recursive: true })
    writeFileSync(
      path.join(pkgDir, "package.json"),
      JSON.stringify({ name }),
      "utf-8",
    )
  }

  describe("pnpm", () => {
    test("should parse block-sequence entries with inline comments", async () => {
      writeFileSync(
        path.join(tempDir, "pnpm-workspace.yaml"),
        "packages:\n  - workspaces/* # existing workspaces\n",
        "utf-8",
      )
      createPackage("workspaces/app", "app")

      const result = await getWorkspaces(tempDir, "pnpm")
      expect(result).toContain(path.join("workspaces", "app"))
    })

    test("should parse flow-style sequence", async () => {
      writeFileSync(
        path.join(tempDir, "pnpm-workspace.yaml"),
        "packages: [workspaces/*]\n",
        "utf-8",
      )
      createPackage("workspaces/app", "app")

      const result = await getWorkspaces(tempDir, "pnpm")
      expect(result).toContain(path.join("workspaces", "app"))
    })

    test("should read pnpm-workspace.yml (.yml extension)", async () => {
      writeFileSync(
        path.join(tempDir, "pnpm-workspace.yml"),
        "packages:\n  - workspaces/*\n",
        "utf-8",
      )
      createPackage("workspaces/app", "app")

      const result = await getWorkspaces(tempDir, "pnpm")
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
      createPackage("workspaces/app", "app")

      const result = await getWorkspaces(tempDir, "pnpm")
      expect(result).toContain(path.join("workspaces", "app"))
    })

    test("should return empty array when no workspaces directories exist", async () => {
      writeFileSync(
        path.join(tempDir, "pnpm-workspace.yaml"),
        "packages:\n  - workspaces/*\n",
        "utf-8",
      )

      const result = await getWorkspaces(tempDir, "pnpm")
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

      const result = await getWorkspaces(tempDir, "pnpm")
      expect(result).toContain(path.join("apps", "web"))
      expect(result).toContain(path.join("apps", "mobile", "app"))
    })

    test("should resolve pattern with trailing slash", async () => {
      writeFileSync(
        path.join(tempDir, "pnpm-workspace.yaml"),
        "packages:\n  - packages/*/\n",
        "utf-8",
      )
      createPackage("packages/alpha", "alpha")
      createPackage("packages/beta", "beta")

      const result = await getWorkspaces(tempDir, "pnpm")
      expect(result).toContain(path.join("packages", "alpha"))
      expect(result).toContain(path.join("packages", "beta"))
    })

    test("should exclude packages matching negation pattern", async () => {
      writeFileSync(
        path.join(tempDir, "pnpm-workspace.yaml"),
        "packages:\n  - packages/*\n  - '!packages/legacy-*'\n",
        "utf-8",
      )
      createPackage("packages/ui-button", "ui-button")
      createPackage("packages/legacy-old", "legacy-old")

      const result = await getWorkspaces(tempDir, "pnpm")
      expect(result).toContain(path.join("packages", "ui-button"))
      expect(result).not.toContain(path.join("packages", "legacy-old"))
    })

    test("should exclude nested packages matching negation pattern", async () => {
      writeFileSync(
        path.join(tempDir, "pnpm-workspace.yaml"),
        "packages:\n  - apps/**\n  - '!apps/e2e/**'\n",
        "utf-8",
      )
      createPackage("apps/web", "web")
      createPackage("apps/e2e/tests", "e2e-tests")

      const result = await getWorkspaces(tempDir, "pnpm")
      expect(result).toContain(path.join("apps", "web"))
      expect(result).not.toContain(path.join("apps", "e2e", "tests"))
    })
  })

  describe("npm", () => {
    test("should read workspaces from package.json", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: ["workspaces/*"] }),
        "utf-8",
      )
      createPackage("workspaces/app", "app")

      const result = await getWorkspaces(tempDir, "npm")
      expect(result).toContain(path.join("workspaces", "app"))
    })

    test("should read workspaces.packages from package.json", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: { packages: ["packages/*"] } }),
        "utf-8",
      )
      createPackage("packages/alpha", "alpha")

      const result = await getWorkspaces(tempDir, "npm")
      expect(result).toContain(path.join("packages", "alpha"))
    })

    test("should exclude packages matching negation pattern", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: ["packages/*", "!packages/legacy-*"] }),
        "utf-8",
      )
      createPackage("packages/ui-button", "ui-button")
      createPackage("packages/legacy-old", "legacy-old")

      const result = await getWorkspaces(tempDir, "npm")
      expect(result).toContain(path.join("packages", "ui-button"))
      expect(result).not.toContain(path.join("packages", "legacy-old"))
    })

    test("should return empty array when no workspaces directories exist", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: ["workspaces/*"] }),
        "utf-8",
      )

      const result = await getWorkspaces(tempDir, "npm")
      expect(result).toStrictEqual([])
    })
  })

  describe("bun", () => {
    test("should read workspaces from package.json", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: ["workspaces/*"] }),
        "utf-8",
      )
      createPackage("workspaces/app", "app")

      const result = await getWorkspaces(tempDir, "bun")
      expect(result).toContain(path.join("workspaces", "app"))
    })

    test("should ignore pnpm-workspace.yaml", async () => {
      writeFileSync(
        path.join(tempDir, "pnpm-workspace.yaml"),
        "packages:\n  - workspaces/*\n",
        "utf-8",
      )

      const result = await getWorkspaces(tempDir, "bun")
      expect(result).toStrictEqual([])
    })

    test("should exclude packages matching negation pattern", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: ["packages/*", "!packages/internal"] }),
        "utf-8",
      )
      createPackage("packages/ui", "ui")
      createPackage("packages/internal", "internal")

      const result = await getWorkspaces(tempDir, "bun")
      expect(result).toContain(path.join("packages", "ui"))
      expect(result).not.toContain(path.join("packages", "internal"))
    })
  })
})
