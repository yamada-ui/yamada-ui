import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

const { mockGetModule } = vi.hoisted(() => ({
  mockGetModule: vi.fn(),
}))

vi.mock("../../utils/module", () => ({
  getModule: mockGetModule,
}))

import { tokens } from "."

const TONES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

function createTone(prefix: string) {
  return Object.fromEntries(TONES.map((tone) => [tone, `${prefix}-${tone}`]))
}

function createBasicTheme() {
  return {
    code: "",
    dependencies: [],
    mod: {
      default: {
        breakpoints: { sm: "30em", md: "48em", lg: "62em" },
        colors: { primary: createTone("#primary") },
        fonts: { body: "Inter", heading: "Inter" },
        spaces: { sm: "0.5rem", md: "1rem" },
      },
    },
  }
}

describe("tokens", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
    mockGetModule.mockReset()
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should generate theme typings with config", async () => {
    mockGetModule.mockResolvedValue(createBasicTheme())

    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({
        format: { enabled: false },
        lint: { enabled: false },
        monorepo: true,
        path: "./workspaces/ui",
        theme: { path: "./workspaces/theme" },
      }),
    )

    const themeFile = path.join(
      tempDir,
      "workspaces",
      "theme",
      "src",
      "index.ts",
    )
    const { mkdirSync } = await import("fs")
    mkdirSync(path.dirname(themeFile), { recursive: true })
    writeFileSync(themeFile, "export default {}")

    await tokens.parseAsync(
      [themeFile, "--cwd", tempDir, "--no-format", "--no-lint"],
      { from: "user" },
    )

    const outPath = path.join(
      tempDir,
      "workspaces",
      "theme",
      "src",
      "index.types.ts",
    )
    expect(existsSync(outPath)).toBeTruthy()
    const content = readFileSync(outPath, "utf-8")
    expect(content).toContain("CustomThemeTokens")
  })

  test("should generate internal tokens", async () => {
    mockGetModule.mockResolvedValue(createBasicTheme())

    const themeFile = path.join(tempDir, "theme.ts")
    writeFileSync(themeFile, "export default {}")

    await tokens.parseAsync(
      [themeFile, "--cwd", tempDir, "--internal", "--no-format", "--no-lint"],
      { from: "user" },
    )

    const outPath = path.join(tempDir, "index.types.ts")
    expect(existsSync(outPath)).toBeTruthy()
    const content = readFileSync(outPath, "utf-8")
    expect(content).toContain("GeneratedThemeTokens")
  })

  test("should show error when no input path", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({
        format: { enabled: false },
        lint: { enabled: false },
        monorepo: true,
        path: "./workspaces/ui",
      }),
    )

    await tokens.parseAsync(["--cwd", tempDir, "--no-format", "--no-lint"], {
      from: "user",
    })

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("No input path"),
    )
  })

  test("should use --out option", async () => {
    mockGetModule.mockResolvedValue(createBasicTheme())

    const themeFile = path.join(tempDir, "theme.ts")
    writeFileSync(themeFile, "export default {}")
    const outPath = path.join(tempDir, "custom.types.ts")

    await tokens.parseAsync(
      [
        themeFile,
        "--cwd",
        tempDir,
        "--internal",
        "--out",
        outPath,
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    expect(existsSync(outPath)).toBeTruthy()
  })

  test("should handle semanticTokens, themeSchemes, and styles", async () => {
    mockGetModule.mockResolvedValue({
      code: "",
      dependencies: [],
      mod: {
        config: {
          theme: { responsive: true },
        },
        default: {
          animations: {
            bounce: { transform: "scale(1.1)" },
            fadeIn: { keyframes: { from: {}, to: {} } },
          },
          breakpoints: { sm: "30em", md: "48em" },
          colors: {
            primary: createTone("#primary"),
            secondary: createTone("#secondary"),
          },
          semanticTokens: {
            colors: {
              bg: { base: "white", _dark: "black" },
            },
            colorSchemes: {
              accent: ["primary"],
              alias: "secondary",
              brand: createTone("#brand"),
            },
          },
          styles: {
            button: { sm: {}, md: {} },
            layerStyles: { card: {} },
            textStyles: { body: {}, heading: {} },
          },
          themeSchemes: { light: {}, dark: {} },
        },
      },
    })

    const themeFile = path.join(tempDir, "theme.ts")
    writeFileSync(themeFile, "export default {}")

    await tokens.parseAsync(
      [themeFile, "--cwd", tempDir, "--internal", "--no-format", "--no-lint"],
      { from: "user" },
    )

    const outPath = path.join(tempDir, "index.types.ts")
    const content = readFileSync(outPath, "utf-8")
    expect(content).toContain("colorSchemes")
    expect(content).toContain("themeSchemes")
    expect(content).toContain("textStyles")
    expect(content).toContain("layerStyles")
  })

  test("should use theme path from config when no inputPath", async () => {
    mockGetModule.mockResolvedValue(createBasicTheme())

    const themeDir = path.join(tempDir, "workspaces", "theme", "src")
    const { mkdirSync } = await import("fs")
    mkdirSync(themeDir, { recursive: true })
    writeFileSync(path.join(themeDir, "index.ts"), "export default {}")

    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({
        format: { enabled: false },
        lint: { enabled: false },
        monorepo: true,
        path: "./workspaces/ui",
        theme: { path: "./workspaces/theme" },
      }),
    )

    await tokens.parseAsync(["--cwd", tempDir, "--no-format", "--no-lint"], {
      from: "user",
    })

    const outPath = path.join(themeDir, "index.types.ts")
    expect(existsSync(outPath)).toBeTruthy()
  })

  test("should handle mod with theme export instead of default", async () => {
    mockGetModule.mockResolvedValue({
      code: "",
      dependencies: [],
      mod: {
        customConfig: {},
        theme: { colors: { primary: createTone("#p") } },
      },
    })

    const themeFile = path.join(tempDir, "theme.ts")
    writeFileSync(themeFile, "export const theme = {}")

    await tokens.parseAsync(
      [themeFile, "--cwd", tempDir, "--internal", "--no-format", "--no-lint"],
      { from: "user" },
    )

    const outPath = path.join(tempDir, "index.types.ts")
    expect(existsSync(outPath)).toBeTruthy()
  })

  test("should not create typings file when --dry-run", async () => {
    mockGetModule.mockResolvedValue(createBasicTheme())

    const themeFile = path.join(tempDir, "theme.ts")
    writeFileSync(themeFile, "export default {}")

    await tokens.parseAsync(
      [
        themeFile,
        "--cwd",
        tempDir,
        "--internal",
        "--dry-run",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const outPath = path.join(tempDir, "index.types.ts")
    expect(existsSync(outPath)).toBeFalsy()
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("(dry run) Would write:"),
    )
  })

  test("should handle non-Error throw", async () => {
    mockGetModule.mockRejectedValue("string error")

    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    const themeFile = path.join(tempDir, "theme.ts")
    writeFileSync(themeFile, "export default {}")

    await tokens.parseAsync(
      [themeFile, "--cwd", tempDir, "--internal", "--no-format", "--no-lint"],
      { from: "user" },
    )

    expect(spinner.fail).toHaveBeenCalledWith("An unknown error occurred")
  })
})
