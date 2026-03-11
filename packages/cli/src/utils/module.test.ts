import { mkdtempSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

const { mockBuild, mockNodeEval } = vi.hoisted(() => ({
  mockBuild: vi.fn(),
  mockNodeEval: vi.fn(),
}))

vi.mock("esbuild", () => ({ build: mockBuild }))
vi.mock("node-eval", () => ({ default: mockNodeEval }))

import { getModule } from "./module"

describe("getModule", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
    mockBuild.mockReset()
    mockNodeEval.mockReset()
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should build and run module via Script", async () => {
    const file = path.join(tempDir, "theme.ts")
    writeFileSync(file, "")

    const code =
      "(function(exports, require, module) { module.exports = { default: { key: 'value' } }; })"
    mockBuild.mockResolvedValue({
      metafile: { inputs: { "theme.ts": {}, "utils.ts": {} } },
      outputFiles: [{ text: code }],
    })

    const result = await getModule(file, tempDir)
    expect(result.code).toBe(code)
    expect(result.dependencies).toStrictEqual(["theme.ts", "utils.ts"])
    expect(result.mod.exports).toStrictEqual({ default: { key: "value" } })
  })

  test("should fallback to node-eval when script calls require with a different module", async () => {
    const file = path.join(tempDir, "theme.ts")
    writeFileSync(file, "")

    const code = `(function(exports, require, module) {
      const p = require("path");
      module.exports = { default: { sep: p.sep } };
    })`
    mockBuild.mockResolvedValue({
      metafile: { inputs: { "theme.ts": {} } },
      outputFiles: [{ text: code }],
    })
    mockNodeEval.mockReturnValue({ default: { sep: "/" } })

    const result = await getModule(file, tempDir)
    expect(result.code).toBe(code)
    expect(mockNodeEval).toHaveBeenCalledWith(code)
    expect(result.mod).toStrictEqual({ default: { sep: "/" } })
  })

  test("should fallback to node-eval when Script fails", async () => {
    const file = path.join(tempDir, "theme.ts")
    writeFileSync(file, "")

    mockBuild.mockResolvedValue({
      metafile: { inputs: {} },
      outputFiles: [{ text: "not a callable function" }],
    })
    mockNodeEval.mockReturnValue({ theme: {} })

    const result = await getModule(file, tempDir)
    expect(mockNodeEval).toHaveBeenCalledWith("not a callable function")
    expect(result.mod).toStrictEqual({ theme: {} })
  })

  test("should fallback when code is undefined", async () => {
    const file = path.join(tempDir, "theme.ts")
    writeFileSync(file, "")

    mockBuild.mockResolvedValue({
      metafile: "not-an-object",
      outputFiles: [{}],
    })
    mockNodeEval.mockReturnValue({})

    const result = await getModule(file, tempDir)
    expect(result.dependencies).toStrictEqual([])
    expect(mockNodeEval).toHaveBeenCalledWith(undefined)
  })

  test("should handle empty outputFiles", async () => {
    const file = path.join(tempDir, "theme.ts")
    writeFileSync(file, "")

    mockBuild.mockResolvedValue({
      metafile: { inputs: {} },
      outputFiles: [],
    })
    mockNodeEval.mockReturnValue({})

    const result = await getModule(file, tempDir)
    expect(result.code).toBeUndefined()
  })
})
