import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { prettierFormatter } from "./prettier"

const { detect, formatFiles, formatText } = prettierFormatter

describe("prettierFormatter", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should expose adapter name", () => {
    expect(prettierFormatter.name).toBe("prettier")
  })

  describe("formatText", () => {
    test("should return content unchanged when disabled", async () => {
      const result = await formatText("const   x=1", {
        cwd: tempDir,
        enabled: false,
      })
      expect(result).toBe("const   x=1")
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
      const result = await formatText(registry, {
        cwd: tempDir,
        parser: "json",
      })
      expect(result).toBe(
        '{ "$schema": "https://example.com/schema.json", "sources": [] }\n',
      )
    })

    test("should apply config from .prettierrc in cwd", async () => {
      writeFileSync(
        path.join(tempDir, ".prettierrc"),
        JSON.stringify({ semi: false }),
      )
      const result = await formatText("const x = 1", { cwd: tempDir })
      expect(result).toBe("const x = 1\n")
    })

    test("should return content unchanged when prettier fails to parse it", async () => {
      const broken = "const = = ="
      const result = await formatText(broken, { cwd: tempDir })
      expect(result).toBe(broken)
    })
  })

  describe("formatFiles", () => {
    test("should skip when disabled", async () => {
      const filePath = path.join(tempDir, "test.ts")
      writeFileSync(filePath, "const   x=1")
      await formatFiles(filePath, { enabled: false })
      expect(readFileSync(filePath, "utf-8")).toBe("const   x=1")
    })

    test("should read, format, and write files", async () => {
      const filePath = path.join(tempDir, "test.ts")
      writeFileSync(filePath, "const   x=1")
      await formatFiles(filePath, { cwd: tempDir })
      expect(readFileSync(filePath, "utf-8")).toBe("const x = 1;\n")
    })
  })

  describe("detect", () => {
    test('should return "config" when prettier config file exists', async () => {
      writeFileSync(path.join(tempDir, ".prettierrc"), "{}")
      await expect(detect(tempDir)).resolves.toBe("config")
    })

    test('should return "dependency" when package.json has prettier dependency', async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ devDependencies: { prettier: "^3" } }),
      )
      await expect(detect(tempDir)).resolves.toBe("dependency")
    })

    test("should return false when no signal is found", async () => {
      writeFileSync(
        path.join(tempDir, "package.json"),
        JSON.stringify({ dependencies: {} }),
      )
      await expect(detect(tempDir)).resolves.toBeFalsy()
    })

    test("should return false when package.json is missing and no config", async () => {
      await expect(detect(tempDir)).resolves.toBeFalsy()
    })
  })
})
