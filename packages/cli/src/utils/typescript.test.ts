import { mkdtempSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import {
  getTsconfig,
  isJsx,
  isTsx,
  transformExtension,
  transformTsToJs,
  transformTsxToJsx,
} from "./typescript"

describe("transformExtension", () => {
  test("should return unchanged when jsx is falsy", () => {
    expect(transformExtension("index.ts", undefined)).toBe("index.ts")
    expect(transformExtension("index.ts", false)).toBe("index.ts")
  })

  test("should transform .ts to .js", () => {
    expect(transformExtension("index.ts", true)).toBe("index.js")
  })

  test("should transform .tsx to .jsx", () => {
    expect(transformExtension("app.tsx", true)).toBe("app.jsx")
  })

  test("should return unchanged for other extensions", () => {
    expect(transformExtension("data.json", true)).toBe("data.json")
  })
})

describe("isTsx", () => {
  test("should return true for .tsx", () => {
    expect(isTsx("app.tsx")).toBeTruthy()
  })

  test("should return false for non-.tsx", () => {
    expect(isTsx("app.ts")).toBeFalsy()
  })
})

describe("isJsx", () => {
  test("should return true for .jsx", () => {
    expect(isJsx("app.jsx")).toBeTruthy()
  })

  test("should return false for non-.jsx", () => {
    expect(isJsx("app.ts")).toBeFalsy()
  })
})

describe("transformTsxToJsx", () => {
  test("should remove type annotations and preserve JSX", () => {
    const result = transformTsxToJsx("const App: React.FC = () => <div />")
    expect(result).toContain("<div />")
    expect(result).not.toContain(": React.FC")
  })
})

describe("transformTsToJs", () => {
  test("should remove type annotations", () => {
    const result = transformTsToJs("const x: number = 1\n")
    expect(result).toContain("const x = 1")
  })
})

describe("getTsconfig", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should read and parse tsconfig.json", async () => {
    writeFileSync(
      path.join(tempDir, "tsconfig.json"),
      JSON.stringify({ compilerOptions: { strict: true } }),
    )
    const result = await getTsconfig(tempDir)
    expect(result.compilerOptions.strict).toBeTruthy()
  })

  test("should throw when tsconfig.json does not exist", async () => {
    await expect(getTsconfig(tempDir)).rejects.toThrow("tsconfig.json")
  })
})
