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

vi.mock("../../utils", async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    installDependencies: vi.fn().mockResolvedValue(undefined),
    validateDir: vi.fn().mockImplementation(actual.validateDir),
  }
})

vi.mock("node-fetch", () => ({
  default: vi.fn().mockImplementation((url: string) => {
    if (url.includes("theme.json")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            section: "theme",
            sources: [
              { name: "index.ts", content: `export const theme = {}\n` },
              { name: "tokens.ts", content: `export const tokens = {}\n` },
            ],
          }),
        ok: true,
      })
    }
    return Promise.resolve({ ok: false, status: 404 })
  }),
}))

import { theme } from "."

function setupProject(tempDir: string, overrides: { [key: string]: any } = {}) {
  const config = {
    $schema: "https://yamada-ui.com/registry/v2/config.schema.json",
    components: { overwrite: true },
    format: { enabled: false },
    hooks: { overwrite: true },
    lint: { enabled: false },
    monorepo: true,
    path: "./workspaces/ui",
    providers: { overwrite: true },
    ...overrides,
  }
  writeFileSync(path.join(tempDir, "ui.json"), JSON.stringify(config))
}

describe("theme", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should generate theme files", async () => {
    setupProject(tempDir)

    const prompts = await import("prompts")
    const mockPrompts = vi.mocked(prompts.default)
    mockPrompts
      .mockResolvedValueOnce({ themePath: "./workspaces/theme" })
      .mockResolvedValueOnce({ src: true, packageName: "@workspaces/theme" })
      .mockResolvedValueOnce({ install: false })

    await theme.parseAsync(["--cwd", tempDir, "--no-format", "--no-lint"], {
      from: "user",
    })

    const themeDir = path.join(tempDir, "workspaces", "theme")
    expect(existsSync(path.join(themeDir, "src", "index.ts"))).toBeTruthy()
    expect(existsSync(path.join(themeDir, "src", "tokens.ts"))).toBeTruthy()
    expect(existsSync(path.join(themeDir, "package.json"))).toBeTruthy()
    expect(existsSync(path.join(themeDir, "tsconfig.json"))).toBeTruthy()
    expect(existsSync(path.join(themeDir, "src", "registry.json"))).toBeTruthy()

    const uiConfig = JSON.parse(
      readFileSync(path.join(tempDir, "ui.json"), "utf-8"),
    )
    expect(uiConfig.theme).toBeDefined()
  })

  test("should generate theme with --yes flag", async () => {
    setupProject(tempDir)

    await theme.parseAsync(
      [
        "./workspaces/theme",
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const themeDir = path.join(tempDir, "workspaces", "theme")
    expect(existsSync(path.join(themeDir, "src", "index.ts"))).toBeTruthy()
  })

  test("should show error when config does not exist", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await theme.parseAsync(
      ["--cwd", tempDir, "--yes", "--no-install", "--no-format", "--no-lint"],
      { from: "user" },
    )

    expect(spinner.fail).toHaveBeenCalledWith(expect.stringContaining("config"))
  })

  test("should error when dir exists with --yes and no --overwrite", async () => {
    setupProject(tempDir)
    const { mkdirSync } = await import("fs")
    mkdirSync(path.join(tempDir, "workspaces", "theme"), { recursive: true })

    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await theme.parseAsync(
      [
        "./workspaces/theme",
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("already exists"),
    )
  })

  test("should generate polyrepo theme (non-monorepo)", async () => {
    setupProject(tempDir, { monorepo: false })

    await theme.parseAsync(
      ["./theme", "--cwd", tempDir, "--yes", "--no-format", "--no-lint"],
      { from: "user" },
    )

    const themeDir = path.join(tempDir, "theme")
    expect(existsSync(path.join(themeDir, "index.ts"))).toBeTruthy()
    // Polyrepo should not have package.json
    expect(existsSync(path.join(themeDir, "package.json"))).toBeFalsy()
    // Should have tsconfig.json
    expect(existsSync(path.join(themeDir, "tsconfig.json"))).toBeTruthy()
  })

  test("should generate theme with jsx option", async () => {
    setupProject(tempDir, { jsx: true, monorepo: false })

    await theme.parseAsync(
      [
        "./theme",
        "--cwd",
        tempDir,
        "--yes",
        "--js",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const themeDir = path.join(tempDir, "theme")
    expect(existsSync(path.join(themeDir, "index.js"))).toBeTruthy()
    // Should NOT have tsconfig.json when jsx
    expect(existsSync(path.join(themeDir, "tsconfig.json"))).toBeFalsy()
  })

  test("should overwrite existing directory with --overwrite", async () => {
    setupProject(tempDir)
    const { mkdirSync } = await import("fs")
    mkdirSync(path.join(tempDir, "workspaces", "theme"), { recursive: true })

    await theme.parseAsync(
      [
        "./workspaces/theme",
        "--cwd",
        tempDir,
        "--yes",
        "--overwrite",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const themeDir = path.join(tempDir, "workspaces", "theme")
    expect(existsSync(path.join(themeDir, "src", "index.ts"))).toBeTruthy()
  })

  test("should install dependencies with --install", async () => {
    setupProject(tempDir)

    await theme.parseAsync(
      [
        "./workspaces/theme",
        "--cwd",
        tempDir,
        "--yes",
        "--install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const themeDir = path.join(tempDir, "workspaces", "theme")
    expect(existsSync(path.join(themeDir, "src", "index.ts"))).toBeTruthy()
  })

  test("should generate monorepo theme without src directory", async () => {
    setupProject(tempDir)
    const prompts = await import("prompts")
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({ themePath: "./workspaces/theme" })
      .mockResolvedValueOnce({ src: false, packageName: "@workspaces/theme" })
      .mockResolvedValueOnce({ install: false })

    await theme.parseAsync(["--cwd", tempDir, "--no-format", "--no-lint"], {
      from: "user",
    })

    const themeDir = path.join(tempDir, "workspaces", "theme")
    // Without src, files should be directly in theme dir
    expect(existsSync(path.join(themeDir, "index.ts"))).toBeTruthy()
    expect(existsSync(path.join(themeDir, "package.json"))).toBeTruthy()
  })

  test("should reach spinner.succeed after installing dependencies in monorepo", async () => {
    setupProject(tempDir)

    const ora = await import("ora")
    const spinner = ora.default()

    await theme.parseAsync(
      [
        "./workspaces/theme",
        "--cwd",
        tempDir,
        "--yes",
        "--install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const themeDir = path.join(tempDir, "workspaces", "theme")
    expect(existsSync(path.join(themeDir, "src", "index.ts"))).toBeTruthy()
    expect(spinner.succeed).toHaveBeenCalledWith(
      expect.stringContaining("Installed dependencies"),
    )
  })

  test("should generate devDependencies in monorepo package.json", async () => {
    setupProject(tempDir)

    const constant = await import("../../constant")
    const original = constant.REQUIRED_DEV_DEPENDENCIES.theme
    // Temporarily add a dev dependency so the .map callback body executes
    ;(constant.REQUIRED_DEV_DEPENDENCIES as any).theme = ["typescript@^5"]

    await theme.parseAsync(
      [
        "./workspaces/theme",
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const themeDir = path.join(tempDir, "workspaces", "theme")
    const pkgJson = JSON.parse(
      readFileSync(path.join(themeDir, "package.json"), "utf-8"),
    )
    expect(pkgJson.devDependencies).toHaveProperty("typescript")

    // Restore
    ;(constant.REQUIRED_DEV_DEPENDENCIES as any).theme = original
  })

  test("should overwrite existing directory when prompted (without --yes)", async () => {
    setupProject(tempDir)
    const { mkdirSync } = await import("fs")
    const themeDir = path.join(tempDir, "workspaces", "theme")
    mkdirSync(themeDir, { recursive: true })
    writeFileSync(path.join(themeDir, "old-file.txt"), "old content")

    const prompts = await import("prompts")
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({ themePath: "./workspaces/theme" })
      .mockResolvedValueOnce({ src: true, packageName: "@workspaces/theme" })
      .mockResolvedValueOnce({ overwrite: true })
      .mockResolvedValueOnce({ install: false })

    await theme.parseAsync(["--cwd", tempDir, "--no-format", "--no-lint"], {
      from: "user",
    })

    // Old file should be removed by rimraf
    expect(existsSync(path.join(themeDir, "old-file.txt"))).toBeFalsy()
    // New theme files should exist
    expect(existsSync(path.join(themeDir, "src", "index.ts"))).toBeTruthy()
  })

  test("should handle non-Error throw", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    // Mock validateDir to throw a non-Error value
    const utils = await import("../../utils")
    vi.mocked(utils.validateDir).mockRejectedValueOnce("string error")

    setupProject(tempDir)

    await theme.parseAsync(
      ["--cwd", tempDir, "--yes", "--no-install", "--no-format", "--no-lint"],
      { from: "user" },
    )

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("unknown error"),
    )
  })

  test("should not create theme files when --dry-run", async () => {
    setupProject(tempDir)

    await theme.parseAsync(
      [
        "./workspaces/theme",
        "--cwd",
        tempDir,
        "--yes",
        "--dry-run",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    expect(existsSync(path.join(tempDir, "workspaces", "theme"))).toBeFalsy()
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("(dry run) Would write:"),
    )
  })

  test("should not clear existing directory when --dry-run with overwrite", async () => {
    setupProject(tempDir)
    const { mkdirSync } = await import("fs")
    const themeDir = path.join(tempDir, "workspaces", "theme")
    mkdirSync(themeDir, { recursive: true })
    writeFileSync(path.join(themeDir, "old-file.txt"), "old content")

    const prompts = await import("prompts")
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({})
      .mockResolvedValueOnce({ src: true, packageName: "@workspaces/theme" })
      .mockResolvedValueOnce({ overwrite: true })

    await theme.parseAsync(
      [
        "./workspaces/theme",
        "--cwd",
        tempDir,
        "--dry-run",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    expect(existsSync(path.join(themeDir, "old-file.txt"))).toBeTruthy()
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("(dry run) Would clear:"),
    )
  })
})
