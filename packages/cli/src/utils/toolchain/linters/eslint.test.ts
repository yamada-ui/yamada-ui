import type { Linter } from "../types"
import { beforeEach, describe, expect, test, vi } from "vitest"

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

import { createESLintLinter } from "./eslint"

describe("createESLintLinter", () => {
  let linter: Linter

  beforeEach(() => {
    linter = createESLintLinter()
    mockLintText.mockReset()
    mockLintFiles.mockReset()
    mockOutputFixes.mockReset()
  })

  describe("lintText", () => {
    test("should return linted content when output exists", async () => {
      mockLintText.mockResolvedValueOnce([{ output: "const x = 1;\n" }])
      const result = await linter.lintText("const x = 1")
      expect(result).toBe("const x = 1;\n")
    })

    test("should return original when no output", async () => {
      mockLintText.mockResolvedValueOnce([{}])
      const result = await linter.lintText("const x = 1")
      expect(result).toBe("const x = 1")
    })

    test("should return original on error", async () => {
      mockLintText.mockRejectedValueOnce(new Error("lint error"))
      const result = await linter.lintText("const x = 1")
      expect(result).toBe("const x = 1")
    })

    test("should pass cwd and filePath options", async () => {
      mockLintText.mockResolvedValueOnce([{}])
      await linter.lintText("code", { cwd: "/tmp", filePath: "test.ts" })
      expect(mockLintText).toHaveBeenCalledWith("code", {
        filePath: "test.ts",
      })
    })
  })

  describe("lintFiles", () => {
    test("should lint and output fixes", async () => {
      mockLintFiles.mockResolvedValueOnce([])
      await linter.lintFiles("*.ts")
      expect(mockLintFiles).toHaveBeenCalledWith("*.ts")
      expect(mockOutputFixes).toHaveBeenCalledWith(expect.any(Array))
    })

    test("should not throw on error", async () => {
      mockLintFiles.mockRejectedValueOnce(new Error("lint error"))
      await expect(linter.lintFiles("*.ts")).resolves.toBeUndefined()
    })

    test("should pass cwd option", async () => {
      mockLintFiles.mockResolvedValueOnce([])
      await linter.lintFiles("*.ts", { cwd: "/tmp" })
      expect(mockLintFiles).toHaveBeenCalledWith("*.ts")
    })
  })
})
