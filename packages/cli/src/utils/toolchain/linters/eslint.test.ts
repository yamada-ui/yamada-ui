import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { eslintLinter } from "./eslint"

const { detect, lintFiles, lintText } = eslintLinter

const { mockLintFiles, mockLintText, mockOutputFixes } = vi.hoisted(() => ({
  mockLintFiles: vi.fn(),
  mockLintText: vi.fn(),
  mockOutputFixes: vi.fn(),
}))

vi.mock("eslint", () => ({
  ESLint: Object.assign(
    function () {
      return { lintFiles: mockLintFiles, lintText: mockLintText }
    },
    { outputFixes: mockOutputFixes },
  ),
}))

describe("eslintLinter", () => {
  test("should expose adapter name", () => {
    expect(eslintLinter.name).toBe("eslint")
  })
})

describe("lintText", () => {
  beforeEach(() => {
    mockLintText.mockReset()
    mockLintFiles.mockReset()
    mockOutputFixes.mockReset()
  })
  test("should return content unchanged when disabled", async () => {
    const result = await lintText("const x = 1", { enabled: false })
    expect(result).toBe("const x = 1")
  })

  test("should return linted content when output exists", async () => {
    mockLintText.mockResolvedValueOnce([{ output: "const x = 1;\n" }])
    const result = await lintText("const x = 1")
    expect(result).toBe("const x = 1;\n")
  })

  test("should return original when no output", async () => {
    mockLintText.mockResolvedValueOnce([{}])
    const result = await lintText("const x = 1")
    expect(result).toBe("const x = 1")
  })

  test("should return original on error", async () => {
    mockLintText.mockRejectedValueOnce(new Error("lint error"))
    const result = await lintText("const x = 1")
    expect(result).toBe("const x = 1")
  })
})

describe("lintFiles", () => {
  beforeEach(() => {
    mockLintFiles.mockReset()
    mockOutputFixes.mockReset()
  })

  test("should skip when disabled", async () => {
    await lintFiles("*.ts", { enabled: false })
    expect(mockLintFiles).not.toHaveBeenCalled()
  })

  test("should lint and output fixes", async () => {
    mockLintFiles.mockResolvedValueOnce([])
    await lintFiles("*.ts")
    expect(mockLintFiles).toHaveBeenCalledWith("*.ts")
    expect(mockOutputFixes).toHaveBeenCalledWith(expect.any(Array))
  })

  test("should not throw on error", async () => {
    mockLintFiles.mockRejectedValueOnce(new Error("lint error"))
    await expect(lintFiles("*.ts")).resolves.toBeUndefined()
  })
})

describe("detect", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test('should return "config" when eslint.config.js exists', async () => {
    writeFileSync(path.join(tempDir, "eslint.config.js"), "")
    await expect(detect(tempDir)).resolves.toBe("config")
  })

  test('should return "config" when .eslintrc.json exists', async () => {
    writeFileSync(path.join(tempDir, ".eslintrc.json"), "{}")
    await expect(detect(tempDir)).resolves.toBe("config")
  })

  test('should return "dependency" when package.json has eslint dependency', async () => {
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ devDependencies: { eslint: "^9" } }),
    )
    await expect(detect(tempDir)).resolves.toBe("dependency")
  })

  test('should return "config" when package.json has eslintConfig field', async () => {
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ eslintConfig: { rules: {} } }),
    )
    await expect(detect(tempDir)).resolves.toBe("config")
  })

  test("should return false when no signal is found", async () => {
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ dependencies: {} }),
    )
    await expect(detect(tempDir)).resolves.toBeFalsy()
  })
})
