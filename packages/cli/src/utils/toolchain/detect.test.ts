import { mkdtempSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import { detectFormatter, detectLinter } from "./detect"

describe("detectFormatter", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-detect-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should return explicit tool when not auto", () => {
    expect(detectFormatter(tempDir, "biome")).toBe("biome")
    expect(detectFormatter(tempDir, "oxfmt")).toBe("oxfmt")
    expect(detectFormatter(tempDir, "prettier")).toBe("prettier")
  })

  test("should detect biome from biome.json", () => {
    writeFileSync(path.join(tempDir, "biome.json"), "{}")
    expect(detectFormatter(tempDir)).toBe("biome")
    expect(detectFormatter(tempDir, "auto")).toBe("biome")
  })

  test("should detect biome from biome.jsonc", () => {
    writeFileSync(path.join(tempDir, "biome.jsonc"), "{}")
    expect(detectFormatter(tempDir)).toBe("biome")
  })

  test("should detect biome from package.json dependency", () => {
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ devDependencies: { "@biomejs/biome": "^1.0.0" } }),
    )
    expect(detectFormatter(tempDir)).toBe("biome")
  })

  test("should detect prettier from .prettierrc", () => {
    writeFileSync(path.join(tempDir, ".prettierrc"), "{}")
    expect(detectFormatter(tempDir)).toBe("prettier")
  })

  test("should detect prettier from prettier.config.js", () => {
    writeFileSync(
      path.join(tempDir, "prettier.config.js"),
      "module.exports = {}",
    )
    expect(detectFormatter(tempDir)).toBe("prettier")
  })

  test("should detect prettier from package.json dependency", () => {
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ devDependencies: { prettier: "^3.0.0" } }),
    )
    expect(detectFormatter(tempDir)).toBe("prettier")
  })

  test("should detect oxfmt from package.json dependency", () => {
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ devDependencies: { oxfmt: "^1.0.0" } }),
    )
    expect(detectFormatter(tempDir)).toBe("oxfmt")
  })

  test("should fallback to prettier when nothing detected", () => {
    expect(detectFormatter(tempDir)).toBe("prettier")
  })
})

describe("detectLinter", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-detect-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should return explicit tool when not auto", () => {
    expect(detectLinter(tempDir, "biome")).toBe("biome")
    expect(detectLinter(tempDir, "oxlint")).toBe("oxlint")
    expect(detectLinter(tempDir, "eslint")).toBe("eslint")
  })

  test("should detect biome from biome.json", () => {
    writeFileSync(path.join(tempDir, "biome.json"), "{}")
    expect(detectLinter(tempDir)).toBe("biome")
    expect(detectLinter(tempDir, "auto")).toBe("biome")
  })

  test("should detect eslint from eslint.config.js", () => {
    writeFileSync(path.join(tempDir, "eslint.config.js"), "module.exports = {}")
    expect(detectLinter(tempDir)).toBe("eslint")
  })

  test("should detect eslint from .eslintrc.json", () => {
    writeFileSync(path.join(tempDir, ".eslintrc.json"), "{}")
    expect(detectLinter(tempDir)).toBe("eslint")
  })

  test("should detect eslint from package.json dependency", () => {
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ devDependencies: { eslint: "^8.0.0" } }),
    )
    expect(detectLinter(tempDir)).toBe("eslint")
  })

  test("should detect oxlint from package.json dependency", () => {
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ devDependencies: { oxlint: "^1.0.0" } }),
    )
    expect(detectLinter(tempDir)).toBe("oxlint")
  })

  test("should fallback to eslint when nothing detected", () => {
    expect(detectLinter(tempDir)).toBe("eslint")
  })
})
