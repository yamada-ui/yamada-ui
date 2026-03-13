import { beforeEach, describe, expect, test, vi } from "vitest"
import { lintFiles, lintText } from "./lint"

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
