import type fs from "fs"
import { mkdtempSync, rmSync, writeFileSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import {
  addWorkspace,
  findDependencies,
  getNotInstalledDependencies,
  getPackageJson,
  getPackageManager,
  getPackageName,
  getPackageNameWithVersion,
  getVersion,
  installDependencies,
  packageAddArgs,
  packageExecuteCommands,
  replaceVersion,
  splitVersion,
  uninstallDependencies,
  validatePackageName,
} from "./package"

vi.mock("./fs", async (importOriginal) => {
  const actual = await importOriginal<typeof fs>()
  return {
    ...actual,
    execFileAsync: vi.fn().mockResolvedValue({ stderr: "", stdout: "" }),
  }
})

describe("getPackageManager", () => {
  const original = process.env.npm_config_user_agent

  afterEach(() => {
    process.env.npm_config_user_agent = original
  })

  test("should return yarn", () => {
    process.env.npm_config_user_agent = "yarn/1.22.0"
    expect(getPackageManager()).toBe("yarn")
  })

  test("should return pnpm", () => {
    process.env.npm_config_user_agent = "pnpm/8.0.0"
    expect(getPackageManager()).toBe("pnpm")
  })

  test("should return bun", () => {
    process.env.npm_config_user_agent = "bun/1.0.0"
    expect(getPackageManager()).toBe("bun")
  })

  test("should default to npm", () => {
    process.env.npm_config_user_agent = ""
    expect(getPackageManager()).toBe("npm")
  })
})

describe("validatePackageName", () => {
  test("should return false for valid names", () => {
    expect(validatePackageName("my-package")).toBeFalsy()
  })

  test("should return true for invalid names", () => {
    expect(validatePackageName("")).toBeTruthy()
  })
})

describe("getPackageJson", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should read package.json", async () => {
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ name: "test" }),
    )
    const result = await getPackageJson(tempDir)
    expect(result.name).toBe("test")
  })

  test("should throw when not found", async () => {
    await expect(getPackageJson(tempDir)).rejects.toThrowError("package.json")
  })
})

describe("getVersion", () => {
  test("should return current version when found", () => {
    expect(getVersion({ dependencies: { react: "^18" } }, "react")).toBe("^18")
  })

  test("should return version from devDependencies", () => {
    expect(
      getVersion({ devDependencies: { typescript: "^5" } }, "typescript"),
    ).toBe("^5")
  })

  test("should return undefined when not found and no version", () => {
    expect(getVersion({}, "react")).toBeUndefined()
  })

  test("should return wanted when not installed", () => {
    expect(getVersion({}, "react@^18")).toStrictEqual({ wanted: "^18" })
  })

  test("should return current when version matches exactly", () => {
    expect(
      getVersion({ dependencies: { react: "^18.0.0" } }, "react@^18.0.0"),
    ).toBe("^18.0.0")
  })

  test("should return wanted and current when version differs", () => {
    expect(
      getVersion({ dependencies: { react: "^17.0.0" } }, "react@^19"),
    ).toStrictEqual({ current: "^17.0.0", wanted: "^19" })
  })
})

describe("findDependencies", () => {
  test("should map dependencies to versions", () => {
    const result = findDependencies({ dependencies: { react: "^18" } }, [
      "react",
      "lodash",
    ])
    expect(result.react).toBe("^18")
    expect(result.lodash).toBeUndefined()
  })
})

describe("getNotInstalledDependencies", () => {
  test("should return not-installed and outdated dependencies", () => {
    const result = getNotInstalledDependencies(
      { dependencies: { react: "^17" } },
      ["react@^19", "lodash"],
    )
    expect(result).toHaveLength(2)
  })
})

describe("splitVersion", () => {
  test("should split unscoped package", () => {
    expect(splitVersion("react@^18")).toStrictEqual(["react", "^18"])
  })

  test("should split scoped package", () => {
    expect(splitVersion("@yamada-ui/react@^2")).toStrictEqual([
      "@yamada-ui/react",
      "^2",
    ])
  })

  test("should handle no version", () => {
    const [name, version] = splitVersion("react")
    expect(name).toBe("react")
    expect(version).toBeUndefined()
  })
})

describe("replaceVersion", () => {
  test("should return unchanged when no tag", () => {
    expect(replaceVersion("@yamada-ui/react@^2", "@yamada-ui/react")).toBe(
      "@yamada-ui/react@^2",
    )
  })

  test("should replace version for matching target", () => {
    expect(
      replaceVersion("@yamada-ui/react@^2", "@yamada-ui/react", "next"),
    ).toBe("@yamada-ui/react@next")
  })

  test("should not replace for non-matching target", () => {
    expect(replaceVersion("react@^18", "@yamada-ui/react", "next")).toBe(
      "react@^18",
    )
  })

  test("should return unchanged when no version", () => {
    expect(replaceVersion("react", "@yamada-ui/react", "next")).toBe("react")
  })
})

describe("getPackageName", () => {
  test("should return name without version", () => {
    expect(getPackageName("react@^18")).toBe("react")
    expect(getPackageName("@yamada-ui/react@^2")).toBe("@yamada-ui/react")
  })
})

describe("getPackageNameWithVersion", () => {
  test("should return string as-is", () => {
    expect(getPackageNameWithVersion("react")).toBe("react")
  })

  test("should format object", () => {
    expect(getPackageNameWithVersion({ name: "react", wanted: "^19" })).toBe(
      "react@^19",
    )
  })
})

describe("packageAddArgs", () => {
  test("npm", () => {
    expect(packageAddArgs("npm")).toStrictEqual(["install"])
  })

  test("pnpm", () => {
    expect(packageAddArgs("pnpm")).toStrictEqual(["add"])
  })

  test("npm with dev", () => {
    expect(packageAddArgs("npm", { dev: true })).toStrictEqual([
      "install",
      "--save-dev",
    ])
  })

  test("yarn with dev", () => {
    expect(packageAddArgs("yarn", { dev: true })).toStrictEqual([
      "add",
      "--dev",
    ])
  })

  test("with exact", () => {
    expect(packageAddArgs("npm", { exact: true })).toStrictEqual([
      "install",
      "--save-exact",
    ])
  })
})

describe("packageExecuteCommands", () => {
  test("npm", () => {
    expect(packageExecuteCommands("npm")).toStrictEqual({
      args: [],
      command: "npx",
    })
  })

  test("pnpm", () => {
    expect(packageExecuteCommands("pnpm")).toStrictEqual({
      args: ["dlx"],
      command: "pnpm",
    })
  })

  test("yarn", () => {
    expect(packageExecuteCommands("yarn")).toStrictEqual({
      args: ["dlx"],
      command: "yarn",
    })
  })

  test("bun", () => {
    expect(packageExecuteCommands("bun")).toStrictEqual({
      args: ["--bun"],
      command: "bunx",
    })
  })
})

describe("installDependencies", () => {
  test("should install specific dependencies", async () => {
    const { execFileAsync } = vi.mocked(await import("./fs"))
    await installDependencies(["react"], { cwd: "/tmp" })
    expect(execFileAsync).toHaveBeenCalledWith(
      expect.any(String),
      expect.arrayContaining(["react"]),
      expect.objectContaining({ cwd: "/tmp" }),
    )
  })

  test("should run plain install when no dependencies", async () => {
    const { execFileAsync } = vi.mocked(await import("./fs"))
    await installDependencies([], { cwd: "/tmp" })
    expect(execFileAsync).toHaveBeenCalledWith(
      expect.any(String),
      ["install"],
      { cwd: "/tmp" },
    )
  })
})

describe("uninstallDependencies", () => {
  test("should uninstall dependencies", async () => {
    const { execFileAsync } = vi.mocked(await import("./fs"))
    await uninstallDependencies(["react"], { cwd: "/tmp" })
    expect(execFileAsync).toHaveBeenCalledWith(
      expect.any(String),
      expect.arrayContaining(["react"]),
      expect.objectContaining({ cwd: "/tmp" }),
    )
  })

  test("should not call when empty", async () => {
    const { execFileAsync } = vi.mocked(await import("./fs"))
    execFileAsync.mockClear()
    await uninstallDependencies([], { cwd: "/tmp" })
    expect(execFileAsync).not.toHaveBeenCalled()
  })
})

describe("addWorkspace", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should create pnpm-workspace.yaml for pnpm", async () => {
    const original = process.env.npm_config_user_agent
    process.env.npm_config_user_agent = "pnpm/8.0.0"
    await addWorkspace(tempDir, "packages/**", {})
    const { readFileSync } = await import("fs")
    const content = readFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "utf-8",
    )
    expect(content).toContain("packages/**")
    process.env.npm_config_user_agent = original
  })

  test("should update existing pnpm-workspace.yaml", async () => {
    const original = process.env.npm_config_user_agent
    process.env.npm_config_user_agent = "pnpm/8.0.0"
    const { writeFileSync: wfs } = await import("fs")
    const YAML = (await import("yamljs")).default
    wfs(
      path.join(tempDir, "pnpm-workspace.yaml"),
      YAML.stringify({ packages: ["existing/**"] }),
    )
    await addWorkspace(tempDir, "packages/**", {})
    const content = (await import("fs")).readFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "utf-8",
    )
    expect(content).toContain("packages/**")
    expect(content).toContain("existing/**")
    process.env.npm_config_user_agent = original
  })

  test("should skip duplicate workspace in pnpm", async () => {
    const original = process.env.npm_config_user_agent
    process.env.npm_config_user_agent = "pnpm/8.0.0"
    const { writeFileSync: wfs } = await import("fs")
    const YAML = (await import("yamljs")).default
    wfs(
      path.join(tempDir, "pnpm-workspace.yaml"),
      YAML.stringify({ packages: ["packages/**"] }),
    )
    await addWorkspace(tempDir, "packages/**", {})
    const content = (await import("fs")).readFileSync(
      path.join(tempDir, "pnpm-workspace.yaml"),
      "utf-8",
    )
    const matches = content.match(/packages\/\*\*/g)
    expect(matches).toHaveLength(1)
    process.env.npm_config_user_agent = original
  })

  test("should update package.json workspaces for npm", async () => {
    const original = process.env.npm_config_user_agent
    process.env.npm_config_user_agent = ""
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ name: "test" }),
    )
    await addWorkspace(tempDir, "packages/**", {})
    const pkg = JSON.parse(
      (await import("fs")).readFileSync(
        path.join(tempDir, "package.json"),
        "utf-8",
      ),
    )
    expect(pkg.workspaces).toContain("packages/**")
    process.env.npm_config_user_agent = original
  })

  test("should skip duplicate workspace in npm", async () => {
    const original = process.env.npm_config_user_agent
    process.env.npm_config_user_agent = ""
    writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({ name: "test", workspaces: ["packages/**"] }),
    )
    await addWorkspace(tempDir, "packages/**", {})
    const pkg = JSON.parse(
      (await import("fs")).readFileSync(
        path.join(tempDir, "package.json"),
        "utf-8",
      ),
    )
    expect(pkg.workspaces).toHaveLength(1)
    process.env.npm_config_user_agent = original
  })
})
