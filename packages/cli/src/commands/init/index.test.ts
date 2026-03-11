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
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

vi.mock("../../utils", async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    installDependencies: vi.fn().mockResolvedValue(undefined),
    validateDir: vi.fn().mockImplementation(actual.validateDir),
  }
})

import { init } from "."
import { execFileAsync } from "../../utils"

describe("init", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should generate monorepo project", async () => {
    const prompts = await import("prompts")
    const mockPrompts = vi.mocked(prompts.default)
    mockPrompts
      .mockResolvedValueOnce({
        src: true,
        format: true,
        lint: true,
        monorepo: true,
        outdir: undefined,
        packageName: undefined,
      })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ install: true })
    await init.parseAsync(["--cwd", tempDir], { from: "user" })
    expect(mockPrompts).toHaveBeenCalledTimes(4)
    const configPath = path.join(tempDir, "ui.json")
    const workspacePath = path.join(tempDir, "pnpm-workspace.yaml")
    expect(existsSync(configPath)).toBeTruthy()
    expect(existsSync(workspacePath)).toBeTruthy()
    const config = JSON.parse(readFileSync(configPath, "utf-8"))
    expect(config.monorepo).toBeTruthy()
    expect(config.path).toBe("./workspaces/ui")
    const outdirPath = path.join(tempDir, "workspaces", "ui")
    expect(existsSync(outdirPath)).toBeTruthy()
    const packageJson = JSON.parse(
      readFileSync(path.join(outdirPath, "package.json"), "utf-8"),
    )
    expect(packageJson.name).toBe("@workspaces/ui")
  })

  test("should generate polyrepo project", async () => {
    const prompts = await import("prompts")
    const mockPrompts = vi.mocked(prompts.default)
    mockPrompts
      .mockResolvedValueOnce({
        format: true,
        lint: true,
        monorepo: false,
        outdir: undefined,
        packageName: undefined,
      })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ install: true })
    await execFileAsync("pnpm", ["init"], { cwd: tempDir })
    await init.parseAsync(["--cwd", tempDir], { from: "user" })
    expect(mockPrompts).toHaveBeenCalledTimes(3)
    const configPath = path.join(tempDir, "ui.json")
    expect(existsSync(configPath)).toBeTruthy()
    const config = JSON.parse(readFileSync(configPath, "utf-8"))
    expect(config.monorepo).toBeFalsy()
    expect(config.path).toBe("./components/ui")
    const outdirPath = path.join(tempDir, "components", "ui")
    expect(existsSync(outdirPath)).toBeTruthy()
    const { installDependencies } = await import("../../utils")
    expect(installDependencies).toHaveBeenCalledWith(
      expect.arrayContaining([expect.stringContaining("@yamada-ui/react")]),
      expect.objectContaining({ cwd: tempDir }),
    )
  })

  test("should show error when config already exists", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    writeFileSync(path.join(tempDir, "ui.json"), JSON.stringify({}), "utf-8")
    vi.mocked(spinner.fail).mockClear()
    await init.parseAsync(["--cwd", tempDir, "--yes"], { from: "user" })
    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("config file already exists"),
    )
  })

  test("should generate monorepo with jsx", async () => {
    await init.parseAsync(
      ["--cwd", tempDir, "--yes", "--monorepo", "--jsx", "--no-install"],
      { from: "user" },
    )

    const outdirPath = path.join(tempDir, "workspaces", "ui")
    expect(existsSync(outdirPath)).toBeTruthy()
    // jsx → index.js instead of index.ts (.ts → .js)
    expect(existsSync(path.join(outdirPath, "src", "index.js"))).toBeTruthy()
    // jsx → no tsconfig.json generated
    expect(existsSync(path.join(outdirPath, "tsconfig.json"))).toBeFalsy()
  })

  test("should generate monorepo without src (tsconfig include adjusted)", async () => {
    const prompts = await import("prompts")
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({
        src: false,
        format: true,
        lint: true,
        monorepo: true,
        outdir: undefined,
        packageName: undefined,
      })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ install: false })

    await init.parseAsync(["--cwd", tempDir], { from: "user" })

    const outdirPath = path.join(tempDir, "workspaces", "ui")
    const tsconfig = JSON.parse(
      readFileSync(path.join(outdirPath, "tsconfig.json"), "utf-8"),
    )
    // Without src, include paths should not contain "src/"
    for (const inc of tsconfig.include) {
      expect(inc).not.toContain("src/")
    }
    // Files at root, not in src/
    expect(existsSync(path.join(outdirPath, "index.ts"))).toBeTruthy()
  })

  test("should generate monorepo with --install", async () => {
    const { installDependencies } = await import("../../utils")

    await init.parseAsync(
      ["--cwd", tempDir, "--yes", "--monorepo", "--install"],
      { from: "user" },
    )

    expect(installDependencies).toHaveBeenCalledWith(
      [],
      expect.objectContaining({ cwd: tempDir }),
    )
  })

  test("should show error when outdir already exists with --yes", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    // Create outdir before init
    const outdirPath = path.join(tempDir, "workspaces", "ui")
    mkdirSync(outdirPath, { recursive: true })

    await init.parseAsync(
      ["--cwd", tempDir, "--yes", "--monorepo", "--no-install"],
      { from: "user" },
    )

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("directory already exists"),
    )
  })

  test("should generate with custom outdir containing /", async () => {
    const prompts = await import("prompts")
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({
        src: true,
        format: true,
        lint: true,
        monorepo: true,
        outdir: "./packages/ui-lib",
        packageName: undefined,
      })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ install: false })

    await init.parseAsync(["--cwd", tempDir], { from: "user" })

    const configPath = path.join(tempDir, "ui.json")
    const config = JSON.parse(readFileSync(configPath, "utf-8"))
    expect(config.path).toBe("./packages/ui-lib")
    const outdirPath = path.join(tempDir, "packages", "ui-lib")
    expect(existsSync(outdirPath)).toBeTruthy()
  })

  test("should generate with custom config path containing /", async () => {
    mkdirSync(path.join(tempDir, "config"), { recursive: true })

    await init.parseAsync(
      [
        "--cwd",
        tempDir,
        "--yes",
        "--monorepo",
        "--no-install",
        "--config",
        "config/ui.json",
      ],
      { from: "user" },
    )

    const configPath = path.join(tempDir, "config", "ui.json")
    expect(existsSync(configPath)).toBeTruthy()
  })

  test("should handle non-Error throw", async () => {
    const { validateDir } = await import("../../utils")
    vi.mocked(validateDir).mockRejectedValueOnce("string error")

    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await init.parseAsync(["--cwd", tempDir, "--yes"], { from: "user" })

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("unknown error"),
    )
  })

  test("should overwrite existing config when prompted (without --yes)", async () => {
    const prompts = await import("prompts")
    const mockPrompts = vi.mocked(prompts.default)

    // Create config file before init
    writeFileSync(
      path.join(tempDir, "ui.json"),
      JSON.stringify({ old: true }),
      "utf-8",
    )

    mockPrompts
      .mockResolvedValueOnce({
        src: true,
        format: true,
        lint: true,
        monorepo: true,
      })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ overwrite: true })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ install: false })

    await init.parseAsync(["--cwd", tempDir], { from: "user" })

    const configPath = path.join(tempDir, "ui.json")
    expect(existsSync(configPath)).toBeTruthy()
    const config = JSON.parse(readFileSync(configPath, "utf-8"))
    // Should have been overwritten with new config
    expect(config.monorepo).toBeTruthy()
    expect(config.old).toBeUndefined()
  })

  test("should generate monorepo with outdir without / (addWorkspace with plain outdir)", async () => {
    const prompts = await import("prompts")
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({
        src: true,
        format: true,
        lint: true,
        monorepo: true,
        outdir: "ui",
        packageName: undefined,
      })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ install: false })

    await init.parseAsync(["--cwd", tempDir], { from: "user" })

    const configPath = path.join(tempDir, "ui.json")
    const config = JSON.parse(readFileSync(configPath, "utf-8"))
    expect(config.path).toBe("ui")
    const outdirPath = path.join(tempDir, "ui")
    expect(existsSync(outdirPath)).toBeTruthy()
    expect(existsSync(path.join(outdirPath, "src", "index.ts"))).toBeTruthy()
  })

  test("should generate polyrepo with jsx", async () => {
    const prompts = await import("prompts")
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({
        format: true,
        lint: true,
        monorepo: false,
        outdir: undefined,
        packageName: undefined,
      })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ install: false })

    // Create a minimal package.json
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ name: "test-project", version: "1.0.0" }),
      "utf-8",
    )

    await init.parseAsync(["--cwd", tempDir, "--jsx"], { from: "user" })

    const outdirPath = path.join(tempDir, "components", "ui")
    // jsx → index.js instead of index.ts
    expect(existsSync(path.join(outdirPath, "index.js"))).toBeTruthy()
  })

  test("should overwrite existing outdir when prompted", async () => {
    const prompts = await import("prompts")

    // Create outdir before init
    const outdirPath = path.join(tempDir, "workspaces", "ui")
    mkdirSync(outdirPath, { recursive: true })
    writeFileSync(path.join(outdirPath, "old-file.txt"), "old")

    vi.mocked(prompts.default)
      .mockResolvedValueOnce({})
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ overwrite: true })
      .mockResolvedValueOnce({ generate: true })
      .mockResolvedValueOnce({ install: false })

    await init.parseAsync(["--cwd", tempDir, "--monorepo", "--no-install"], {
      from: "user",
    })

    // Old file should be removed by rimraf
    expect(existsSync(path.join(outdirPath, "old-file.txt"))).toBeFalsy()
    // New files should exist
    expect(existsSync(path.join(outdirPath, "src", "index.ts"))).toBeTruthy()
  })
})
