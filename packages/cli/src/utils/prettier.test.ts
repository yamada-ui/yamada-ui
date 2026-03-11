import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

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

import { formatFiles, formatText } from "./prettier"

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
