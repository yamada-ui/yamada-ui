import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { prettierFormatter } from "./prettier"

const { formatText } = prettierFormatter

describe("formatText (real prettier)", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should format TypeScript content with the default parser", async () => {
    const result = await formatText("const   x=1", { cwd: tempDir })
    expect(result).toBe("const x = 1;\n")
  })

  test("should format JSON content when parser is json", async () => {
    const result = await formatText('{"a":1,"b":2}', {
      cwd: tempDir,
      parser: "json",
    })
    expect(result).toBe('{ "a": 1, "b": 2 }\n')
  })

  test("should format JSON registry content when parser is json", async () => {
    const registry =
      '{"$schema":"https://example.com/schema.json","sources":[]}'
    const result = await formatText(registry, { cwd: tempDir, parser: "json" })
    expect(result).toBe(
      '{ "$schema": "https://example.com/schema.json", "sources": [] }\n',
    )
  })

  test("should return content unchanged when disabled", async () => {
    const result = await formatText("const   x=1", {
      cwd: tempDir,
      enabled: false,
    })
    expect(result).toBe("const   x=1")
  })

  test("should return content unchanged when prettier fails to parse it", async () => {
    const broken = "const = = ="
    const result = await formatText(broken, { cwd: tempDir })
    expect(result).toBe(broken)
  })
})
