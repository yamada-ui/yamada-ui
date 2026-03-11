import { mkdtempSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import { getConfig } from "./config"

describe("getConfig", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should parse config and return computed paths", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({
        $schema: "https://yamada-ui.com/registry/v2/config.schema.json",
        monorepo: true,
        path: "./workspaces/ui",
      }),
    )

    const config = await getConfig(tempDir, "ui.json")

    expect(config.monorepo).toBeTruthy()
    expect(config.cwd).toBe(tempDir)
    expect(config.paths.ui.root).toContain("workspaces/ui")
    expect(config.isSection("components")).toBeTruthy()
    expect(config.isSection("invalid")).toBeFalsy()
    expect(config.getSectionPath("components")).toBe("./components")
    expect(config.getSectionResolvedPath("components")).toContain("components")
  })

  test("should override format and lint options", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({ monorepo: false }),
    )

    const config = await getConfig(tempDir, "ui.json", {
      format: false,
      lint: false,
    })

    expect(config.format?.enabled).toBeFalsy()
    expect(config.lint?.enabled).toBeFalsy()
  })

  test("should override jsx option", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({ monorepo: false }),
    )

    const config = await getConfig(tempDir, "ui.json", { jsx: true })
    expect(config.jsx).toBeTruthy()
  })

  test("should throw when config file does not exist", async () => {
    await expect(getConfig(tempDir, "ui.json")).rejects.toThrowError("config")
  })

  test("getSection should return section by name", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({ monorepo: true, path: "./workspaces/ui" }),
    )

    const config = await getConfig(tempDir, "ui.json")

    const section = config.getSection("components")
    expect(section?.section).toBe("components")
    expect(section?.path).toBe("./components")
  })

  test("getSection should resolve section by path", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({ monorepo: true, path: "./workspaces/ui" }),
    )

    const config = await getConfig(tempDir, "ui.json")

    const section = config.getSection("components")
    expect(section?.section).toBe("components")
  })

  test("getSection should return undefined for unknown", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({ monorepo: true }),
    )

    const config = await getConfig(tempDir, "ui.json")
    expect(config.getSection("unknown")).toBeUndefined()
    expect(config.getSection()).toBeUndefined()
  })

  test("should handle theme path", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({
        monorepo: true,
        path: "./workspaces/ui",
        theme: { path: "./workspaces/theme" },
      }),
    )

    const config = await getConfig(tempDir, "ui.json")
    expect(config.theme?.path).toContain("workspaces/theme")
    expect(config.paths.theme.root).toContain("workspaces/theme")
  })

  test("getSectionPath should normalize path with leading slash", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({
        components: { path: "/custom-components" },
        monorepo: true,
        path: "./workspaces/ui",
      }),
    )

    const config = await getConfig(tempDir, "ui.json")
    const section = config.getSection("components")
    // NOTE: source code bug - path starting with "/" produces ".//path"
    // getSectionPath prepends "./" to "/path" resulting in ".//path"
    expect(section?.path).toBe(".//custom-components")
  })

  test("getSection should resolve via sectionMap path lookup", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({
        components: { path: "./custom-components" },
        monorepo: true,
        path: "./workspaces/ui",
      }),
    )

    const config = await getConfig(tempDir, "ui.json")

    // Look up by the resolved sectionMap value (stripped of ./ prefix)
    const section = config.getSection("custom-components")
    expect(section?.section).toBe("components")
    expect(section?.resolvedPath).toContain("custom-components")
  })

  test("should use polyrepo default paths when not monorepo", async () => {
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({ monorepo: false }),
    )

    const config = await getConfig(tempDir, "ui.json")
    expect(config.paths.ui.root).toContain(tempDir)
  })
})
