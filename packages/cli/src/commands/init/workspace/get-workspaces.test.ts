import {
  chmodSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
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

    test.each([
      ["empty file", ""],
      ["empty packages array", "packages: []\n"],
      ["no packages key", "catalog:\n  react: ^18.0.0\n"],
    ])("should return empty array when yaml has %s", async (_, content) => {
      writeFileSync(path.join(tempDir, "pnpm-workspace.yaml"), content, "utf-8")

      await expect(getWorkspaces(tempDir, "pnpm")).resolves.toStrictEqual([])
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

    test("should throw with 'Failed to parse' prefix when YAML is malformed", async () => {
      const yamlPath = path.join(tempDir, "pnpm-workspace.yaml")
      writeFileSync(yamlPath, "packages:\n  - [\n", "utf-8")

      await expect(getWorkspaces(tempDir, "pnpm")).rejects.toThrow(
        `Failed to parse ${yamlPath}`,
      )
    })

    test("should throw with 'Failed to read' prefix when file is unreadable", async () => {
      const yamlPath = path.join(tempDir, "pnpm-workspace.yaml")
      writeFileSync(yamlPath, "packages:\n  - workspaces/*\n", "utf-8")
      chmodSync(yamlPath, 0o000)

      await expect(getWorkspaces(tempDir, "pnpm")).rejects.toThrow(
        `Failed to read ${yamlPath}`,
      )
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

  describe.each(["npm", "yarn"] as const)("%s", (packageManager) => {
    test("should read workspaces from package.json", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: ["workspaces/*"] }),
        "utf-8",
      )
      createPackage("workspaces/app", "app")

      const result = await getWorkspaces(tempDir, packageManager)
      expect(result).toContain(path.join("workspaces", "app"))
    })

    test("should read workspaces.packages from package.json", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: { packages: ["packages/*"] } }),
        "utf-8",
      )
      createPackage("packages/alpha", "alpha")

      const result = await getWorkspaces(tempDir, packageManager)
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

      const result = await getWorkspaces(tempDir, packageManager)
      expect(result).toContain(path.join("packages", "ui-button"))
      expect(result).not.toContain(path.join("packages", "legacy-old"))
    })

    test("should return empty array when workspaces is empty array", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: [] }),
        "utf-8",
      )

      const result = await getWorkspaces(tempDir, packageManager)
      expect(result).toStrictEqual([])
    })

    test("should return empty array when no workspaces directories exist", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ workspaces: ["workspaces/*"] }),
        "utf-8",
      )

      const result = await getWorkspaces(tempDir, packageManager)
      expect(result).toStrictEqual([])
    })

    test("should return empty array when package.json does not exist", async () => {
      const result = await getWorkspaces(tempDir, packageManager)
      expect(result).toStrictEqual([])
    })

    test("should throw with 'Failed to parse' prefix when JSON is malformed", async () => {
      const packageJsonPath = path.join(tempDir, "package.json")
      writeFileSync(packageJsonPath, '{ "workspaces": [', "utf-8")

      await expect(getWorkspaces(tempDir, packageManager)).rejects.toThrow(
        `Failed to parse ${packageJsonPath}`,
      )
    })

    test("should throw with 'Failed to read' prefix when file is unreadable", async () => {
      const packageJsonPath = path.join(tempDir, "package.json")
      writeFileSync(
        packageJsonPath,
        JSON.stringify({ workspaces: ["workspaces/*"] }),
        "utf-8",
      )
      chmodSync(packageJsonPath, 0o000)

      await expect(getWorkspaces(tempDir, packageManager)).rejects.toThrow(
        `Failed to read ${packageJsonPath}`,
      )
    })
  })

  describe("path traversal protection", () => {
    test("should skip workspaces resolved outside of project root (pnpm)", async () => {
      const parentDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-parent-"))
      const cwdDir = path.join(parentDir, "project")
      mkdirSync(cwdDir)
      const siblingDir = path.join(parentDir, "sibling", "app")
      mkdirSync(siblingDir, { recursive: true })
      writeFileSync(
        path.join(siblingDir, "package.json"),
        JSON.stringify({ name: "sibling-app" }),
        "utf-8",
      )
      writeFileSync(
        path.join(cwdDir, "pnpm-workspace.yaml"),
        "packages:\n  - ../sibling/*\n",
        "utf-8",
      )

      const warnSpy = vi.spyOn(console, "warn").mockImplementation(vi.fn())
      try {
        const result = await getWorkspaces(cwdDir, "pnpm")
        expect(result).toStrictEqual([])
        expect(warnSpy).toHaveBeenCalledWith(
          expect.stringContaining("Skipping workspace outside of project root"),
        )
      } finally {
        warnSpy.mockRestore()
        rmSync(parentDir, { force: true, recursive: true })
      }
    })

    test("should skip workspaces resolved outside of project root (npm)", async () => {
      const parentDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-parent-"))
      const cwdDir = path.join(parentDir, "project")
      mkdirSync(cwdDir)
      const siblingDir = path.join(parentDir, "sibling", "app")
      mkdirSync(siblingDir, { recursive: true })
      writeFileSync(
        path.join(siblingDir, "package.json"),
        JSON.stringify({ name: "sibling-app" }),
        "utf-8",
      )
      writeFileSync(
        path.join(cwdDir, "package.json"),
        JSON.stringify({ workspaces: ["../sibling/*"] }),
        "utf-8",
      )

      const warnSpy = vi.spyOn(console, "warn").mockImplementation(vi.fn())
      try {
        const result = await getWorkspaces(cwdDir, "npm")
        expect(result).toStrictEqual([])
        expect(warnSpy).toHaveBeenCalledWith(
          expect.stringContaining("Skipping workspace outside of project root"),
        )
      } finally {
        warnSpy.mockRestore()
        rmSync(parentDir, { force: true, recursive: true })
      }
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
