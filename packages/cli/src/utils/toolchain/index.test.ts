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
import { resolveToolchain } from "."
import { prettierFormatter } from "./formatters/prettier"
import { eslintLinter } from "./linters/eslint"

describe("resolveToolchain", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should return prettier and eslint when nothing is detected", async () => {
    const { formatter, linter } = await resolveToolchain(tempDir)

    expect(formatter).toBe(prettierFormatter)
    expect(linter).toBe(eslintLinter)
  })
})
