import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import { getFiles, isWriteable, timer, validateDir, writeFileSafe } from "./fs"

describe("isWriteable", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should return true for writable directory", async () => {
    await expect(isWriteable(tempDir)).resolves.toBeTruthy()
  })

  test("should return false for non-existent path", async () => {
    await expect(
      isWriteable(path.join(tempDir, "nonexistent")),
    ).resolves.toBeFalsy()
  })
})

describe("validateDir", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should return true for valid directory", async () => {
    await expect(validateDir(tempDir)).resolves.toBeTruthy()
  })

  test("should throw for non-existent path", async () => {
    await expect(
      validateDir(path.join(tempDir, "nonexistent")),
    ).rejects.toThrow("does not writeable")
  })

  test("should throw for file path", async () => {
    const filePath = path.join(tempDir, "file.txt")
    writeFileSync(filePath, "test")
    await expect(validateDir(filePath)).rejects.toThrow("is not a directory")
  })
})

describe("writeFileSafe", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should create directories and write file", async () => {
    const filePath = path.join(tempDir, "a", "b", "file.txt")
    await writeFileSafe(filePath, "hello", {
      format: { enabled: false },
      lint: { enabled: false },
    })
    expect(readFileSync(filePath, "utf-8")).toBe("hello")
  })

  test("should write to existing directory", async () => {
    const filePath = path.join(tempDir, "file.txt")
    await writeFileSafe(filePath, "hello", {
      format: { enabled: false },
      lint: { enabled: false },
    })
    expect(readFileSync(filePath, "utf-8")).toBe("hello")
  })

  test("should skip writing and log when dryRun is true", async () => {
    const filePath = path.join(tempDir, "a", "b", "file.txt")
    await writeFileSafe(filePath, "hello", { dryRun: true })
    expect(existsSync(filePath)).toBeFalsy()
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("(dry run) Would write:"),
    )
  })
})

describe("timer", () => {
  test("should measure time and log result", () => {
    const { end } = timer()
    end()
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("Done in"))
  })
})

describe("getFiles", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should read files recursively", async () => {
    const compDir = path.join(tempDir, "components", "button")
    mkdirSync(compDir, { recursive: true })
    writeFileSync(path.join(compDir, "index.ts"), "export {}")
    writeFileSync(path.join(compDir, "registry.json"), "{}")

    const subDir = path.join(compDir, "sub")
    mkdirSync(subDir)
    writeFileSync(path.join(subDir, "helper.ts"), "export {}")
    writeFileSync(path.join(subDir, "registry.json"), "{}")

    const { dirPath, files } = await getFiles(
      path.join(tempDir, "components", "button"),
    )

    expect(dirPath).toContain("button")
    expect(files["index.ts"]).toBe("export {}")
    expect(files["sub/helper.ts"]).toBe("export {}")
    expect(files["registry.json"]).toBeUndefined()
    expect(files["sub/registry.json"]).toBeUndefined()
  })
})
