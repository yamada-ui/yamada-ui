import type { Formatter } from "../types"
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

import { createPrettierFormatter } from "./prettier"

describe("createPrettierFormatter", () => {
  let formatter: Formatter

  beforeEach(() => {
    formatter = createPrettierFormatter()
    mockFormat.mockReset()
    mockResolveConfig.mockReset()
    mockResolveConfigFile.mockReset()
  })

  describe("formatText", () => {
    test("should format content with config", async () => {
      mockResolveConfigFile.mockResolvedValueOnce("/path/.prettierrc")
      mockResolveConfig.mockResolvedValueOnce({ semi: true })
      mockFormat.mockResolvedValueOnce("const x = 1;\n")

      const result = await formatter.formatText("const x=1")
      expect(result).toBe("const x = 1;\n")
    })

    test("should format with provided configPath", async () => {
      mockResolveConfig.mockResolvedValueOnce({})
      mockFormat.mockResolvedValueOnce("formatted")

      const result = await formatter.formatText("code", {
        configPath: "/custom/path",
      })
      expect(result).toBe("formatted")
      expect(mockResolveConfig).toHaveBeenCalledWith("/custom/path")
    })

    test("should handle null configPath", async () => {
      mockResolveConfigFile.mockResolvedValueOnce(null)
      mockFormat.mockResolvedValueOnce("formatted")

      const result = await formatter.formatText("code")
      expect(result).toBe("formatted")
    })

    test("should pass language as parser to prettier", async () => {
      mockResolveConfigFile.mockResolvedValueOnce(null)
      mockFormat.mockResolvedValueOnce("{}")

      await formatter.formatText("{}", { language: "json" })
      expect(mockFormat).toHaveBeenCalledWith(
        "{}",
        expect.objectContaining({ parser: "json" }),
      )
    })

    test("should return original on error", async () => {
      mockResolveConfigFile.mockRejectedValueOnce(new Error("error"))
      const result = await formatter.formatText("const x=1")
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

    test("should read, format, and write files", async () => {
      const filePath = path.join(tempDir, "test.ts")
      writeFileSync(filePath, "const x=1")
      mockResolveConfigFile.mockResolvedValueOnce(null)
      mockFormat.mockResolvedValueOnce("const x = 1;\n")

      await formatter.formatFiles(filePath)

      const content = readFileSync(filePath, "utf-8")
      expect(content).toBe("const x = 1;\n")
    })
  })
})
