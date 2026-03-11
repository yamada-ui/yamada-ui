import type * as utils from "../../utils"
import { mkdtempSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

const { mockExecFileAsync, mockWriteFileSafe } = vi.hoisted(() => ({
  mockExecFileAsync: vi.fn(),
  mockWriteFileSafe: vi.fn().mockResolvedValue(undefined),
}))

vi.mock("../../utils", async (importOriginal) => {
  const actual = await importOriginal<typeof utils>()
  return {
    ...actual,
    execFileAsync: mockExecFileAsync,
    installDependencies: vi.fn().mockResolvedValue(undefined),
    uninstallDependencies: vi.fn().mockResolvedValue(undefined),
    writeFileSafe: mockWriteFileSafe,
  }
})

vi.mock("rimraf", () => ({
  rimraf: vi.fn().mockResolvedValue(undefined),
}))

import type { Config } from "../../index.type"
import type { ChangeMap, DependencyMap } from "../diff/get-diff"
import type { RegistryMap } from "../diff/get-registries-and-files"
import { updateFiles } from "./update-files"

function createConfig(tempDir: string): Config {
  return {
    $schema: "",
    cwd: tempDir,
    format: { enabled: false },
    getSection: () => undefined,
    getSectionPath: (section: string) => `./${section}`,
    getSectionResolvedPath: (section: string) =>
      path.join(tempDir, "workspaces", "ui", "src", section),
    isSection: (section: string) =>
      ["components", "hooks", "providers"].includes(section),
    jsx: false,
    lint: { enabled: false },
    monorepo: true,
    paths: {
      theme: {
        src: path.join(tempDir, "workspaces", "theme", "src"),
        root: path.join(tempDir, "workspaces", "theme"),
      },
      ui: {
        src: path.join(tempDir, "workspaces", "ui", "src"),
        index: path.join(tempDir, "workspaces", "ui", "src", "index.ts"),
        registry: path.join(
          tempDir,
          "workspaces",
          "ui",
          "src",
          "registry.json",
        ),
        root: path.join(tempDir, "workspaces", "ui"),
      },
    },
  } as unknown as Config
}

describe("updateFiles", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
    mockExecFileAsync.mockReset()
    mockWriteFileSafe.mockReset()
    mockWriteFileSafe.mockResolvedValue(undefined)
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should update files with force mode", async () => {
    const config = createConfig(tempDir)
    const changeMap: ChangeMap = {
      button: {
        "index.ts": {
          diff: [{ added: true, count: 1, removed: false, value: "new" }],
          local: "old",
          remote: "new",
        },
      },
    }
    const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }
    const registryMap: RegistryMap = {
      local: {},
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "new" }],
        },
      },
    }

    const result = await updateFiles(
      changeMap,
      dependencyMap,
      registryMap,
      config,
      {
        force: true,
        yes: true,
      },
    )

    expect(mockWriteFileSafe).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.any(Object),
    )
    expect(result).toStrictEqual({})
  })

  test("should merge files without force using diff3", async () => {
    const config = createConfig(tempDir)

    const currentPath = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
      "index.ts",
    )
    const { mkdirSync } = await import("fs")
    mkdirSync(path.dirname(currentPath), { recursive: true })
    writeFileSync(currentPath, "current content")

    mockExecFileAsync.mockResolvedValue({ stdout: "merged content" })

    const changeMap: ChangeMap = {
      button: {
        "index.ts": {
          diff: [{ added: true, count: 1, removed: false, value: "new" }],
          local: "old",
          remote: "new",
        },
      },
    }
    const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }
    const registryMap: RegistryMap = {
      local: {},
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "new" }],
        },
      },
    }

    const result = await updateFiles(
      changeMap,
      dependencyMap,
      registryMap,
      config,
      {
        force: false,
        yes: true,
      },
    )

    expect(mockExecFileAsync).toHaveBeenCalledWith(
      "diff3",
      expect.arrayContaining(["-m"]),
    )
    expect(result).toStrictEqual({})
  })

  test("should handle diff3 conflict", async () => {
    const config = createConfig(tempDir)

    const currentPath = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
      "index.ts",
    )
    const { mkdirSync } = await import("fs")
    mkdirSync(path.dirname(currentPath), { recursive: true })
    writeFileSync(currentPath, "current content")

    mockExecFileAsync.mockRejectedValue({
      stdout: "<<<<<<< conflict content >>>>>>>",
    })

    const changeMap: ChangeMap = {
      button: {
        "index.ts": {
          diff: [{ added: true, count: 1, removed: false, value: "new" }],
          local: "old",
          remote: "new",
        },
      },
    }
    const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }
    const registryMap: RegistryMap = {
      local: {},
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "new" }],
        },
      },
    }

    const result = await updateFiles(
      changeMap,
      dependencyMap,
      registryMap,
      config,
      {
        force: false,
        yes: true,
      },
    )

    expect(result.button).toBeDefined()
  })

  test("should handle diff3 error without stdout (fallback)", async () => {
    const config = createConfig(tempDir)

    const currentPath = path.join(
      tempDir,
      "workspaces",
      "ui",
      "src",
      "components",
      "button",
      "index.ts",
    )
    const { mkdirSync } = await import("fs")
    mkdirSync(path.dirname(currentPath), { recursive: true })
    writeFileSync(currentPath, "current content")

    mockExecFileAsync.mockRejectedValue(new Error("diff3 not found"))

    const changeMap: ChangeMap = {
      button: {
        "index.ts": {
          diff: [{ added: true, count: 1, removed: false, value: "new" }],
          local: "old",
          remote: "new",
        },
      },
    }
    const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }
    const registryMap: RegistryMap = {
      local: {},
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "new" }],
        },
      },
    }

    const result = await updateFiles(
      changeMap,
      dependencyMap,
      registryMap,
      config,
      {
        force: false,
        yes: true,
      },
    )

    expect(result).toStrictEqual({})
  })

  test("should handle remote-only changes (new files)", async () => {
    const config = createConfig(tempDir)
    const changeMap: ChangeMap = {
      button: {
        "styles.ts": {
          diff: [{ added: true, count: 1, removed: false, value: "new" }],
          remote: "new content",
        },
      },
    }
    const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }
    const registryMap: RegistryMap = {
      local: {},
      remote: {
        button: {
          section: "components",
          sources: [{ name: "styles.ts", content: "new content" }],
        },
      },
    }

    await updateFiles(changeMap, dependencyMap, registryMap, config, {
      force: false,
      yes: true,
    })

    expect(mockWriteFileSafe).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.any(Object),
    )
  })

  test("should handle local-only changes (deleted files)", async () => {
    const { rimraf } = await import("rimraf")
    const config = createConfig(tempDir)
    const changeMap: ChangeMap = {
      button: {
        "old.ts": {
          diff: [{ added: false, count: 1, removed: true, value: "old" }],
          local: "old content",
        },
      },
    }
    const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }
    const registryMap: RegistryMap = {
      local: {},
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "content" }],
        },
      },
    }

    await updateFiles(changeMap, dependencyMap, registryMap, config, {
      force: false,
      yes: true,
    })

    expect(rimraf).toHaveBeenCalledWith(expect.any(String))
  })

  test("should handle index component with force", async () => {
    const config = createConfig(tempDir)
    const changeMap: ChangeMap = {
      index: {
        "index.ts": {
          diff: [{ added: true, count: 1, removed: false, value: "new" }],
          local: "old",
          remote: "new",
        },
      },
    }
    const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }
    const registryMap: RegistryMap = {
      local: {},
      remote: {
        index: {
          section: "root",
          sources: [{ name: "index.ts", content: "new" }],
        },
      },
    }

    await updateFiles(changeMap, dependencyMap, registryMap, config, {
      force: true,
      yes: true,
    })

    expect(mockWriteFileSafe).toHaveBeenCalledWith(
      config.paths.ui.index,
      "new",
      config,
    )
  })

  test("should handle index component without force (merge)", async () => {
    const config = createConfig(tempDir)
    const { mkdirSync } = await import("fs")
    mkdirSync(path.dirname(config.paths.ui.index), { recursive: true })
    writeFileSync(config.paths.ui.index, "current index content")

    mockExecFileAsync.mockResolvedValue({ stdout: "merged index" })

    const changeMap: ChangeMap = {
      index: {
        "index.ts": {
          diff: [{ added: true, count: 1, removed: false, value: "new" }],
          local: "old",
          remote: "new",
        },
      },
    }
    const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }
    const registryMap: RegistryMap = {
      local: {},
      remote: {
        index: {
          section: "root",
          sources: [{ name: "index.ts", content: "new" }],
        },
      },
    }

    await updateFiles(changeMap, dependencyMap, registryMap, config, {
      force: false,
      yes: true,
    })

    expect(mockExecFileAsync).toHaveBeenCalledWith(
      "diff3",
      expect.arrayContaining(["-m"]),
    )
  })

  test("should handle index component conflict", async () => {
    const config = createConfig(tempDir)
    const { mkdirSync } = await import("fs")
    mkdirSync(path.dirname(config.paths.ui.index), { recursive: true })
    writeFileSync(config.paths.ui.index, "current index content")

    mockExecFileAsync.mockRejectedValue({
      stdout: "<<<<<<< conflict >>>>>>>",
    })

    const changeMap: ChangeMap = {
      index: {
        "index.ts": {
          diff: [{ added: true, count: 1, removed: false, value: "new" }],
          local: "old",
          remote: "new",
        },
      },
    }
    const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }
    const registryMap: RegistryMap = {
      local: {},
      remote: {
        index: {
          section: "root",
          sources: [{ name: "index.ts", content: "new" }],
        },
      },
    }

    const result = await updateFiles(
      changeMap,
      dependencyMap,
      registryMap,
      config,
      { force: false, yes: true },
    )

    expect(result.index).toBeDefined()
  })

  test("should install and uninstall dependencies", async () => {
    const { installDependencies, uninstallDependencies } =
      await import("../../utils")
    const config = createConfig(tempDir)
    const changeMap: ChangeMap = {}
    const dependencyMap: DependencyMap = {
      add: ["new-pkg"],
      remove: ["old-pkg"],
      update: [{ name: "react", current: "^17", wanted: "^18" }],
    }
    const registryMap: RegistryMap = { local: {}, remote: {} }

    await updateFiles(changeMap, dependencyMap, registryMap, config, {
      install: true,
      yes: true,
    })

    expect(uninstallDependencies).toHaveBeenCalledWith(
      expect.any(Array),
      expect.any(Object),
    )
    expect(installDependencies).toHaveBeenCalledWith(
      expect.any(Array),
      expect.any(Object),
    )
  })

  test("should skip install when install is false", async () => {
    const { installDependencies } = await import("../../utils")
    const config = createConfig(tempDir)
    const changeMap: ChangeMap = {}
    const dependencyMap: DependencyMap = {
      add: ["new-pkg"],
      remove: [],
      update: [],
    }
    const registryMap: RegistryMap = { local: {}, remote: {} }

    const result = await updateFiles(
      changeMap,
      dependencyMap,
      registryMap,
      config,
      {
        install: false,
        yes: true,
      },
    )

    expect(installDependencies).not.toHaveBeenCalled()
    expect(result).toStrictEqual({})
  })
})
