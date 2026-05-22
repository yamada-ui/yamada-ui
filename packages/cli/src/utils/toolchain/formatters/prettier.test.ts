import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"

const { mockFormat, mockResolveConfig, mockResolveConfigFile } = vi.hoisted(
  () => ({
    mockFormat: vi.fn(),
    mockResolveConfig: vi.fn(),
    mockResolveConfigFile: vi.fn(),
  }),
)

vi.mock("prettier", () => ({
  format: mockFormat,
  resolveConfig: mockResolveConfig,
  resolveConfigFile: mockResolveConfigFile,
}))

import { prettierFormatter } from "./prettier"

const { detect, formatFiles, formatText } = prettierFormatter

describe("prettierFormatter", () => {
  test("should expose adapter name", () => {
    expect(prettierFormatter.name).toBe("prettier")
  })
})

describe("formatText", () => {
  test("should return content unchanged when disabled", async () => {
    const result = await formatText("const x=1", { enabled: false })
    expect(result).toBe("const x=1")
  })

  test("should format content with config", async () => {
    mockResolveConfigFile.mockResolvedValueOnce("/path/.prettierrc")
    mockResolveConfig.mockResolvedValueOnce({ semi: true })
    mockFormat.mockResolvedValueOnce("const x = 1;\n")

    const result = await formatText("const x=1")
    expect(result).toBe("const x = 1;\n")
  })

  test("should format with provided configPath", async () => {
    mockResolveConfig.mockResolvedValueOnce({})
    mockFormat.mockResolvedValueOnce("formatted")

    const result = await formatText("code", { configPath: "/custom/path" })
    expect(result).toBe("formatted")
    expect(mockResolveConfig).toHaveBeenCalledWith("/custom/path")
  })

  test("should handle null configPath", async () => {
    mockResolveConfigFile.mockResolvedValueOnce(null)
    mockFormat.mockResolvedValueOnce("formatted")

    const result = await formatText("code")
    expect(result).toBe("formatted")
  })

  test("should default to the typescript parser", async () => {
    mockResolveConfigFile.mockResolvedValueOnce(null)
    mockFormat.mockResolvedValueOnce("formatted")

    await formatText("code")
    expect(mockFormat).toHaveBeenCalledWith(
      "code",
      expect.objectContaining({ parser: "typescript" }),
    )
  })

  test("should pass the given parser to prettier", async () => {
    mockResolveConfigFile.mockResolvedValueOnce(null)
    mockFormat.mockResolvedValueOnce("{}\n")

    await formatText('{"a":1}', { parser: "json" })
    expect(mockFormat).toHaveBeenCalledWith(
      '{"a":1}',
      expect.objectContaining({ parser: "json" }),
    )
  })

  test("should return original on error", async () => {
    mockResolveConfigFile.mockRejectedValueOnce(new Error("error"))
    const result = await formatText("const x=1")
    expect(result).toBe("const x=1")
  })
})

describe("formatFiles", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should skip when disabled", async () => {
    await formatFiles("*.ts", { enabled: false })
    expect(mockFormat).not.toHaveBeenCalled()
  })

  test("should read, format, and write files", async () => {
    const filePath = path.join(tempDir, "test.ts")
    writeFileSync(filePath, "const x=1")
    mockFormat.mockResolvedValueOnce("const x = 1;\n")

    await formatFiles(filePath)

    const content = readFileSync(filePath, "utf-8")
    expect(content).toBe("const x = 1;\n")
  })
})

describe("detect", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
    mockResolveConfigFile.mockReset()
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test('should return "config" when prettier config file is resolved', async () => {
    mockResolveConfigFile.mockResolvedValueOnce(
      path.join(tempDir, ".prettierrc"),
    )
    await expect(detect(tempDir)).resolves.toBe("config")
  })

  test('should return "dependency" when package.json has prettier dependency', async () => {
    mockResolveConfigFile.mockResolvedValueOnce(null)
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ devDependencies: { prettier: "^3" } }),
    )
    await expect(detect(tempDir)).resolves.toBe("dependency")
  })

  test("should return false when no signal is found", async () => {
    mockResolveConfigFile.mockResolvedValueOnce(null)
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ dependencies: {} }),
    )
    await expect(detect(tempDir)).resolves.toBeFalsy()
  })

  test("should return false when package.json is missing and no config", async () => {
    mockResolveConfigFile.mockResolvedValueOnce(null)
    await expect(detect(tempDir)).resolves.toBeFalsy()
  })
})
