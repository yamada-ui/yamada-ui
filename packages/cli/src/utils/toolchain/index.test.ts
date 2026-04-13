import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import {
  resolveFormatter,
  resolveLinter,
  selectFormatter,
  selectLinter,
} from "./index"

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

describe("selectFormatter", () => {
  test("should return options.formatter when set", () => {
    expect(selectFormatter({ formatter: "prettier" })).toBe("prettier")
  })

  test("should return default when neither formatter nor format specified", () => {
    expect(selectFormatter({})).toBe("prettier")
  })

  test("should return default when format.enabled is not false", () => {
    expect(selectFormatter({ format: { enabled: true } })).toBe("prettier")
    expect(selectFormatter({ format: {} })).toBe("prettier")
  })

  test("should return undefined when format.enabled is false", () => {
    expect(selectFormatter({ format: { enabled: false } })).toBeUndefined()
  })

  test("should prioritize formatter over format.enabled=false", () => {
    expect(
      selectFormatter({ format: { enabled: false }, formatter: "prettier" }),
    ).toBe("prettier")
  })
})

describe("selectLinter", () => {
  test("should return options.linter when set", () => {
    expect(selectLinter({ linter: "eslint" })).toBe("eslint")
  })

  test("should return default when neither linter nor lint specified", () => {
    expect(selectLinter({})).toBe("eslint")
  })

  test("should return default when lint.enabled is not false", () => {
    expect(selectLinter({ lint: { enabled: true } })).toBe("eslint")
    expect(selectLinter({ lint: {} })).toBe("eslint")
  })

  test("should return undefined when lint.enabled is false", () => {
    expect(selectLinter({ lint: { enabled: false } })).toBeUndefined()
  })

  test("should prioritize linter over lint.enabled=false", () => {
    expect(selectLinter({ lint: { enabled: false }, linter: "eslint" })).toBe(
      "eslint",
    )
  })
})
