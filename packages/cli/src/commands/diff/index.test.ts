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
    if (url.includes("theme.json")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            section: "theme",
            sources: [
              {
                name: "index.ts",
                content: `export const theme = {}\n`,
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

vi.mock("../update/validate-diff-3", () => ({
  validateDiff3: vi.fn().mockResolvedValue(true),
}))

vi.mock("../update/update-files", () => ({
  updateFiles: vi.fn().mockResolvedValue({}),
}))

vi.mock("../../utils", async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    validateDir: vi.fn().mockImplementation(actual.validateDir),
  }
})

import { diff } from "."

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

function setupProjectWithTheme(tempDir: string) {
  const config = {
    $schema: "https://yamada-ui.com/registry/v2/config.schema.json",
    components: { overwrite: true },
    format: { enabled: false },
    hooks: { overwrite: true },
    lint: { enabled: false },
    monorepo: true,
    path: "./workspaces/ui",
    providers: { overwrite: true },
    theme: { path: "./workspaces/theme" },
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

  // Set up theme directory
  const themeSrcPath = path.join(tempDir, "workspaces", "theme", "src")
  mkdirSync(themeSrcPath, { recursive: true })
  writeFileSync(
    path.join(themeSrcPath, "index.ts"),
    `export const theme = {}\n`,
  )
  writeFileSync(
    path.join(themeSrcPath, "registry.json"),
    JSON.stringify({
      section: "theme",
      sources: [
        {
          name: "index.ts",
          content: `export const theme = {}\n`,
        },
      ],
    }),
  )
}

describe("diff", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should check diff for all components", async () => {
    setupProjectWithComponent(tempDir)

    await diff.parseAsync(
      ["--cwd", tempDir, "--yes", "--no-update", "--no-install"],
      { from: "user" },
    )

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("---------------------------------"),
    )
  })

  test("should check diff for specific component", async () => {
    setupProjectWithComponent(tempDir)

    await diff.parseAsync(
      ["button", "--cwd", tempDir, "--yes", "--no-update", "--no-install"],
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

    await diff.parseAsync(
      ["nonexistent", "--cwd", tempDir, "--yes", "--no-update"],
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

    await diff.parseAsync(["--cwd", tempDir, "--yes", "--no-update"], {
      from: "user",
    })

    expect(spinner.fail).toHaveBeenCalledWith(expect.stringContaining("config"))
  })

  test("should update files when --update is specified", async () => {
    setupProjectWithComponent(tempDir)

    // Change local registry to differ from remote
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

    await diff.parseAsync(
      ["--cwd", tempDir, "--yes", "--update", "--no-install"],
      { from: "user" },
    )

    const { updateFiles } = await import("../update/update-files")
    expect(updateFiles).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Object),
      expect.any(Object),
      expect.any(Object),
      expect.any(Object),
    )
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

    const { updateFiles } = await import("../update/update-files")
    vi.mocked(updateFiles).mockResolvedValueOnce({
      button: { "index.ts": "/tmp/some/path/index.ts" },
    })

    const ora = await import("ora")
    const spinner = ora.default()

    await diff.parseAsync(
      ["--cwd", tempDir, "--yes", "--update", "--no-install"],
      { from: "user" },
    )

    expect(spinner.warn).toHaveBeenCalledWith(
      expect.stringContaining("conflicts"),
    )
  })

  test("should show index changes when diffing all components with changed index", async () => {
    setupProjectWithComponent(tempDir)

    // Make local index registry differ from remote
    const srcPath = path.join(tempDir, "workspaces", "ui", "src")
    writeFileSync(
      path.join(srcPath, "registry.json"),
      JSON.stringify({
        section: "root",
        sources: [
          {
            name: "index.ts",
            content: `export * from "@yamada-ui/react/components/old-component"\n`,
          },
        ],
      }),
    )

    await diff.parseAsync(
      ["--cwd", tempDir, "--yes", "--no-update", "--no-install"],
      { from: "user" },
    )

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("---------------------------------"),
    )
  })

  test("should handle non-Error throw", async () => {
    const { validateDir } = await import("../../utils")
    vi.mocked(validateDir).mockRejectedValueOnce("string error")

    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    setupProjectWithComponent(tempDir)

    await diff.parseAsync(["--cwd", tempDir, "--yes", "--no-update"], {
      from: "user",
    })

    expect(spinner.fail).toHaveBeenCalledWith("An unknown error occurred")
  })

  test("should show error when theme is targeted but not generated", async () => {
    setupProjectWithComponent(tempDir)
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await diff.parseAsync(["theme", "--cwd", tempDir, "--yes", "--no-update"], {
      from: "user",
    })

    expect(spinner.fail).toHaveBeenCalledWith(expect.stringContaining("theme"))
  })

  test("should diff with changes and show detailed output", async () => {
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

    await diff.parseAsync(
      ["button", "--cwd", tempDir, "--yes", "--no-update", "--detail"],
      { from: "user" },
    )

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("---------------------------------"),
    )
  })

  test("should diff all components including theme when theme exists", async () => {
    setupProjectWithTheme(tempDir)

    await diff.parseAsync(
      ["--cwd", tempDir, "--yes", "--no-update", "--no-install"],
      { from: "user" },
    )

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("---------------------------------"),
    )
  })

  test("should diff theme target with changed theme", async () => {
    setupProjectWithTheme(tempDir)

    // Make local theme registry differ from remote
    const themeSrcPath = path.join(tempDir, "workspaces", "theme", "src")
    writeFileSync(
      path.join(themeSrcPath, "registry.json"),
      JSON.stringify({
        section: "theme",
        sources: [
          {
            name: "index.ts",
            content: `export const theme = { old: true }\n`,
          },
        ],
      }),
    )

    await diff.parseAsync(["theme", "--cwd", tempDir, "--yes", "--no-update"], {
      from: "user",
    })

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("---------------------------------"),
    )
  })

  test("should diff index target", async () => {
    setupProjectWithComponent(tempDir)

    await diff.parseAsync(["index", "--cwd", tempDir, "--yes", "--no-update"], {
      from: "user",
    })

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("---------------------------------"),
    )
  })
})
