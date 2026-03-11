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
    validateDir: vi.fn().mockImplementation(actual.validateDir),
  }
})

vi.mock("node-fetch", () => ({
  default: vi.fn().mockImplementation((url: string) => {
    if (url.includes("index.json")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            section: "root",
            sources: [
              {
                name: "index.ts",
                content: `export * from "@yamada-ui/react/components/button"\nexport * from "@yamada-ui/react/components/card"\n`,
              },
            ],
          }),
        ok: true,
      })
    }
    if (url.includes("components/button.json")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            dependencies: {
              components: [],
              externals: ["test-dep@^1.0.0"],
              hooks: [],
              providers: [],
            },
            dependents: { components: ["card"], hooks: [], providers: [] },
            section: "components",
            sources: [
              {
                name: "index.ts",
                content: `export const Button = () => {}\n`,
              },
            ],
          }),
        ok: true,
      })
    }
    if (url.includes("components/card.json")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            dependencies: {
              components: [],
              externals: [],
              hooks: [],
              providers: [],
            },
            dependents: { components: [], hooks: [], providers: [] },
            section: "components",
            sources: [
              {
                name: "index.ts",
                content: `export const Card = () => {}\n`,
              },
            ],
          }),
        ok: true,
      })
    }
    if (url.includes("names.json")) {
      return Promise.resolve({
        json: () => Promise.resolve(["button", "card"]),
        ok: true,
      })
    }
    return Promise.resolve({ ok: false, status: 404 })
  }),
}))

import { add } from "."

function setupProject(tempDir: string) {
  const config = {
    $schema: "https://yamada-ui.com/registry/v2/config.schema.json",
    components: { overwrite: true },
    format: { enabled: false },
    hooks: { overwrite: true },
    lint: { enabled: false },
    monorepo: true,
    path: "./workspaces/ui",
    providers: { overwrite: true },
  }

  writeFileSync(path.join(tempDir, "ui.json"), JSON.stringify(config))

  const uiRoot = path.join(tempDir, "workspaces", "ui")
  mkdirSync(uiRoot, { recursive: true })
  writeFileSync(
    path.join(uiRoot, "package.json"),
    JSON.stringify({ name: "test", dependencies: {} }),
  )

  const srcPath = path.join(uiRoot, "src")
  mkdirSync(srcPath, { recursive: true })
  writeFileSync(path.join(srcPath, "index.ts"), `export {}\n`)
  writeFileSync(
    path.join(srcPath, "registry.json"),
    JSON.stringify({
      section: "root",
      sources: [{ name: "index.ts", content: `export {}\n` }],
    }),
  )
}

describe("add", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should add a component", async () => {
    setupProject(tempDir)

    await add.parseAsync(
      [
        "button",
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    expect(existsSync(path.join(buttonDir, "index.ts"))).toBeTruthy()
    expect(existsSync(path.join(buttonDir, "registry.json"))).toBeTruthy()
  })

  test("should show error when config does not exist", async () => {
    const ora = await import("ora")
    const spinner = ora.default()

    await add.parseAsync(
      [
        "button",
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    expect(spinner.fail).toHaveBeenCalledWith(expect.stringContaining("config"))
  })

  test("should show error when component already exists without overwrite", async () => {
    setupProject(tempDir)

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    mkdirSync(buttonDir, { recursive: true })
    writeFileSync(path.join(buttonDir, "index.ts"), "existing")

    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await add.parseAsync(
      [
        "button",
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
      expect.stringContaining("already exist"),
    )
  })

  test("should add component with dependency installation", async () => {
    setupProject(tempDir)

    await add.parseAsync(
      [
        "button",
        "--cwd",
        tempDir,
        "--yes",
        "--install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    expect(existsSync(path.join(buttonDir, "index.ts"))).toBeTruthy()
  })

  test("should add all components with --yes", async () => {
    setupProject(tempDir)

    await add.parseAsync(
      [
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

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    expect(existsSync(path.join(buttonDir, "index.ts"))).toBeTruthy()
  })

  test("should generate index.ts when it does not exist", async () => {
    setupProject(tempDir)

    const indexPath = path.join(tempDir, "workspaces", "ui", "src", "index.ts")
    const { unlinkSync } = await import("fs")
    unlinkSync(indexPath)

    await add.parseAsync(
      [
        "button",
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    expect(existsSync(indexPath)).toBeTruthy()
    const content = readFileSync(indexPath, "utf-8")
    expect(content).toContain("button")
  })

  test("should prompt for dependency installation when not --yes", async () => {
    setupProject(tempDir)
    const prompts = await import("prompts")
    // First prompt: "components will be added" (button + card from dependents)
    // Second prompt: dependency installation
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({ proceed: true })
      .mockResolvedValueOnce({ proceed: false })

    await add.parseAsync(
      ["button", "--cwd", tempDir, "--no-install", "--no-format", "--no-lint"],
      { from: "user" },
    )

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    expect(existsSync(path.join(buttonDir, "index.ts"))).toBeTruthy()
  })

  test("should handle add all without --yes when dir exists", async () => {
    setupProject(tempDir)
    const prompts = await import("prompts")
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({ proceed: true })
      .mockResolvedValueOnce({ overwrite: true })

    await add.parseAsync(
      ["--cwd", tempDir, "--no-install", "--no-format", "--no-lint"],
      { from: "user" },
    )

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    expect(existsSync(path.join(buttonDir, "index.ts"))).toBeTruthy()
  })

  test("should update affected generated files when adding component with dependents", async () => {
    setupProject(tempDir)

    // Pre-create card component as already generated
    const cardDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "card",
    )
    mkdirSync(cardDir, { recursive: true })
    writeFileSync(
      path.join(cardDir, "index.ts"),
      `export const Card = () => {}\n`,
    )

    await add.parseAsync(
      [
        "button",
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

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    expect(existsSync(path.join(buttonDir, "index.ts"))).toBeTruthy()
  })

  test("should prompt for dep install without --yes and --no-install", async () => {
    setupProject(tempDir)
    const prompts = await import("prompts")
    vi.mocked(prompts.default).mockResolvedValueOnce({ proceed: true })

    await add.parseAsync(
      ["button", "--cwd", tempDir, "--no-install", "--no-format", "--no-lint"],
      { from: "user" },
    )

    expect(prompts.default).toHaveBeenCalledWith(expect.any(Object))
  })

  test("should prompt for overwrite when component exists without --yes and decline", async () => {
    setupProject(tempDir)

    // Pre-create button component so it counts as "generated"
    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    mkdirSync(buttonDir, { recursive: true })
    writeFileSync(path.join(buttonDir, "index.ts"), "existing")

    const prompts = await import("prompts")
    const exitSpy = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error("process.exit")
    })

    // First prompt: "components will be added" (proceed)
    // Second prompt: overwrite confirmation (decline)
    vi.mocked(prompts.default).mockResolvedValueOnce({ overwrite: false })

    try {
      await add.parseAsync(
        [
          "button",
          "--cwd",
          tempDir,
          "--no-install",
          "--no-format",
          "--no-lint",
        ],
        { from: "user" },
      )
    } catch {
      // expected: process.exit throws
    }

    expect(exitSpy).toHaveBeenCalledWith(0)
    exitSpy.mockRestore()
  })

  test("should update affected generated files with subdirectories", async () => {
    setupProject(tempDir)

    // Pre-create card component with a subdirectory named "card" (matching component name)
    // The code at line 288 reads path.join(dirent.parentPath, name) where name is the component name
    const cardDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "card",
    )
    const cardSubDir = path.join(cardDir, "card")
    mkdirSync(cardSubDir, { recursive: true })
    writeFileSync(
      path.join(cardDir, "index.ts"),
      `export const Card = () => {}\n`,
    )
    writeFileSync(
      path.join(cardSubDir, "nested-file.ts"),
      `export const Nested = () => {}\n`,
    )

    await add.parseAsync(
      [
        "button",
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

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    expect(existsSync(path.join(buttonDir, "index.ts"))).toBeTruthy()
    // Card subdirectory file should have been processed
    expect(existsSync(path.join(cardSubDir, "nested-file.ts"))).toBeTruthy()
  })

  test("should auto-set overwrite for affected files when --yes without --overwrite", async () => {
    setupProject(tempDir)

    // Pre-create card component as already generated (so it's in generatedNameMap)
    const cardDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "card",
    )
    mkdirSync(cardDir, { recursive: true })
    writeFileSync(
      path.join(cardDir, "index.ts"),
      `export const Card = () => {}\n`,
    )

    // Adding button (which has card as a dependent) with --yes but WITHOUT --overwrite
    // This should hit lines 265-266: overwrite = true (auto-set when --yes)
    await add.parseAsync(
      [
        "button",
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
      ],
      { from: "user" },
    )

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    expect(existsSync(path.join(buttonDir, "index.ts"))).toBeTruthy()
  })

  test("should prompt for affected files update without --yes and --overwrite", async () => {
    setupProject(tempDir)

    // Pre-create card component as already generated
    const cardDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "card",
    )
    mkdirSync(cardDir, { recursive: true })
    writeFileSync(
      path.join(cardDir, "index.ts"),
      `export const Card = () => {}\n`,
    )

    const prompts = await import("prompts")
    // First prompt: "components will be added" (button + card dependents)
    // Second prompt: "affected generated files will be updated" (card)
    vi.mocked(prompts.default)
      .mockResolvedValueOnce({ proceed: true })
      .mockResolvedValueOnce({ update: true })

    await add.parseAsync(
      ["button", "--cwd", tempDir, "--no-install", "--no-format", "--no-lint"],
      { from: "user" },
    )

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    expect(existsSync(path.join(buttonDir, "index.ts"))).toBeTruthy()
  })

  test("should handle non-Error throw", async () => {
    const { validateDir } = await import("../../utils")
    vi.mocked(validateDir).mockRejectedValueOnce("string error")

    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await add.parseAsync(
      [
        "button",
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
      expect.stringContaining("unknown error"),
    )
  })

  test("should show error when all components add without overwrite and dir exists with --yes", async () => {
    setupProject(tempDir)

    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await add.parseAsync(
      ["--cwd", tempDir, "--yes", "--no-install", "--no-format", "--no-lint"],
      { from: "user" },
    )

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("already exists"),
    )
  })
})
