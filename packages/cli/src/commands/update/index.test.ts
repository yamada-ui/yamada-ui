import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

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
                content: `export * from "@yamada-ui/react/components/button"\n`,
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
              externals: [],
              hooks: [],
              providers: [],
            },
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
    return Promise.resolve({ ok: false, status: 404 })
  }),
}))

vi.mock("./validate-diff-3", () => ({
  validateDiff3: vi.fn().mockResolvedValue(true),
}))

vi.mock("./update-files", () => ({
  updateFiles: vi.fn().mockResolvedValue({}),
}))

vi.mock("../../utils", async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    validateDir: vi.fn().mockImplementation(actual.validateDir),
  }
})

import { update } from "."

function setupProjectWithComponent(tempDir: string) {
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

  const srcPath = path.join(tempDir, "workspaces", "ui", "src")
  mkdirSync(srcPath, { recursive: true })
  writeFileSync(
    path.join(srcPath, "index.ts"),
    `export * from "./components/button"\n`,
  )
  writeFileSync(
    path.join(srcPath, "registry.json"),
    JSON.stringify({
      section: "root",
      sources: [
        {
          name: "index.ts",
          content: `export * from "@yamada-ui/react/components/button"\n`,
        },
      ],
    }),
  )

  const buttonDir = path.join(srcPath, "components", "button")
  mkdirSync(buttonDir, { recursive: true })
  writeFileSync(
    path.join(buttonDir, "index.ts"),
    `export const Button = () => {}\n`,
  )
  writeFileSync(
    path.join(buttonDir, "registry.json"),
    JSON.stringify({
      dependencies: {
        components: [],
        externals: [],
        hooks: [],
        providers: [],
      },
      section: "components",
      sources: [
        { name: "index.ts", content: `export const Button = () => {}\n` },
      ],
    }),
  )
}

describe("update", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should update all components", async () => {
    setupProjectWithComponent(tempDir)

    await update.parseAsync(
      [
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
        "--force",
      ],
      { from: "user" },
    )

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("---------------------------------"),
    )
  })

  test("should update specific component", async () => {
    setupProjectWithComponent(tempDir)

    await update.parseAsync(
      [
        "button",
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
        "--force",
      ],
      { from: "user" },
    )

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("---------------------------------"),
    )
  })

  test("should show error for non-existent component", async () => {
    setupProjectWithComponent(tempDir)
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await update.parseAsync(
      ["nonexistent", "--cwd", tempDir, "--yes", "--force"],
      { from: "user" },
    )

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("nonexistent"),
    )
  })

  test("should show error when config does not exist", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await update.parseAsync(["--cwd", tempDir, "--yes", "--force"], {
      from: "user",
    })

    expect(spinner.fail).toHaveBeenCalledWith(expect.stringContaining("config"))
  })

  test("should show error when theme not found", async () => {
    setupProjectWithComponent(tempDir)
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await update.parseAsync(["theme", "--cwd", tempDir, "--yes", "--force"], {
      from: "user",
    })

    expect(spinner.fail).toHaveBeenCalledWith(expect.stringContaining("theme"))
  })

  test("should validate diff3 when not using --force", async () => {
    setupProjectWithComponent(tempDir)
    const { validateDiff3 } = await import("./validate-diff-3")

    await update.parseAsync(
      ["--cwd", tempDir, "--yes", "--no-install", "--no-format", "--no-lint"],
      { from: "user" },
    )

    expect(validateDiff3).toHaveBeenCalledWith()
  })

  test("should show conflicts when updateFiles returns conflicts", async () => {
    setupProjectWithComponent(tempDir)

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    writeFileSync(
      path.join(buttonDir, "registry.json"),
      JSON.stringify({
        dependencies: {
          components: [],
          externals: [],
          hooks: [],
          providers: [],
        },
        section: "components",
        sources: [
          {
            name: "index.ts",
            content: `export const Button = () => { return "old" }\n`,
          },
        ],
      }),
    )

    const { updateFiles } = await import("./update-files")
    vi.mocked(updateFiles).mockResolvedValueOnce({
      button: { "index.ts": "/tmp/some/path/index.ts" },
    })

    const ora = await import("ora")
    const spinner = ora.default()

    await update.parseAsync(
      [
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
        "--force",
      ],
      { from: "user" },
    )

    expect(spinner.warn).toHaveBeenCalledWith(
      expect.stringContaining("conflicts"),
    )
  })

  test("should handle non-Error throw", async () => {
    const { validateDir } = await import("../../utils")
    vi.mocked(validateDir).mockRejectedValueOnce("string error")

    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    setupProjectWithComponent(tempDir)

    await update.parseAsync(["--cwd", tempDir, "--yes", "--force"], {
      from: "user",
    })

    expect(spinner.fail).toHaveBeenCalledWith("An unknown error occurred")
  })

  test("should update with changed local registry", async () => {
    setupProjectWithComponent(tempDir)

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    writeFileSync(
      path.join(buttonDir, "registry.json"),
      JSON.stringify({
        dependencies: {
          components: [],
          externals: [],
          hooks: [],
          providers: [],
        },
        section: "components",
        sources: [
          {
            name: "index.ts",
            content: `export const Button = () => { return "old" }\n`,
          },
        ],
      }),
    )

    await update.parseAsync(
      [
        "--cwd",
        tempDir,
        "--yes",
        "--no-install",
        "--no-format",
        "--no-lint",
        "--force",
      ],
      { from: "user" },
    )

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("---------------------------------"),
    )
  })

  test("should call updateFiles with dryRun when --dry-run", async () => {
    setupProjectWithComponent(tempDir)

    const buttonDir = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
    )
    writeFileSync(
      path.join(buttonDir, "registry.json"),
      JSON.stringify({
        dependencies: {
          components: [],
          externals: [],
          hooks: [],
          providers: [],
        },
        section: "components",
        sources: [
          {
            name: "index.ts",
            content: `export const Button = () => { return "old" }\n`,
          },
        ],
      }),
    )

    const { updateFiles } = await import("./update-files")

    await update.parseAsync(
      [
        "--cwd",
        tempDir,
        "--yes",
        "--dry-run",
        "--no-install",
        "--no-format",
        "--no-lint",
        "--force",
      ],
      { from: "user" },
    )

    expect(vi.mocked(updateFiles)).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.objectContaining({ dryRun: true }),
    )
  })
})
