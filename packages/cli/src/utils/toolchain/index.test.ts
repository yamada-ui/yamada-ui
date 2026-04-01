import { mkdtempSync, rmSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import { resolveFormatter, resolveLinter } from "./index"

describe("resolveFormatter", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-resolve-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should return PrettierFormatter for prettier", async () => {
    const formatter = await resolveFormatter(tempDir, "prettier")
    expect(formatter).toBeDefined()
    expect(formatter.formatText).toBeTypeOf("function")
    expect(formatter.formatFiles).toBeTypeOf("function")
  })

  test("should return PrettierFormatter by default (fallback)", async () => {
    const formatter = await resolveFormatter(tempDir)
    expect(formatter).toBeDefined()
    expect(formatter.formatText).toBeTypeOf("function")
  })
})

describe("resolveLinter", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-resolve-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should return ESLintLinter for eslint", async () => {
    const linter = await resolveLinter(tempDir, "eslint")
    expect(linter).toBeDefined()
    expect(linter.lintText).toBeTypeOf("function")
    expect(linter.lintFiles).toBeTypeOf("function")
  })

  test("should return ESLintLinter by default (fallback)", async () => {
    const linter = await resolveLinter(tempDir)
    expect(linter).toBeDefined()
    expect(linter.lintText).toBeTypeOf("function")
  })
})
