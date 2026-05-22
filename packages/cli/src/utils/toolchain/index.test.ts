vi.mock("prettier", () => ({
  format: vi.fn(),
  resolveConfig: vi.fn(),
  resolveConfigFile: vi.fn().mockResolvedValue(null),
}))

vi.mock("eslint", () => ({
  ESLint: Object.assign(
    function () {
      return { lintFiles: vi.fn(), lintText: vi.fn() }
    },
    { outputFixes: vi.fn() },
  ),
}))

import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { resolveFormatter, resolveLinter } from "."
import { prettierFormatter } from "./formatters/prettier"
import { eslintLinter } from "./linters/eslint"

describe("resolveFormatter", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should fall back to prettier when nothing is detected", async () => {
    await expect(resolveFormatter(tempDir)).resolves.toBe(prettierFormatter)
  })

  test('should treat tool="auto" the same as undefined', async () => {
    await expect(resolveFormatter(tempDir, "auto")).resolves.toBe(
      prettierFormatter,
    )
  })

  test("should select an adapter by name when the tool matches", async () => {
    await expect(resolveFormatter(tempDir, "prettier")).resolves.toBe(
      prettierFormatter,
    )
  })

  test("should fall back when the tool matches no adapter", async () => {
    await expect(resolveFormatter(tempDir, "unknown")).resolves.toBe(
      prettierFormatter,
    )
  })
})

describe("resolveLinter", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should fall back to eslint when nothing is detected", async () => {
    await expect(resolveLinter(tempDir)).resolves.toBe(eslintLinter)
  })

  test('should treat tool="auto" the same as undefined', async () => {
    await expect(resolveLinter(tempDir, "auto")).resolves.toBe(eslintLinter)
  })

  test("should select an adapter by name when the tool matches", async () => {
    await expect(resolveLinter(tempDir, "eslint")).resolves.toBe(eslintLinter)
  })

  test("should fall back when the tool matches no adapter", async () => {
    await expect(resolveLinter(tempDir, "unknown")).resolves.toBe(eslintLinter)
  })
})
