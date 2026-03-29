import type { Config, Registry, Section } from "../index.type"
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

const { mockFetch } = vi.hoisted(() => ({
  mockFetch: vi.fn(),
}))

vi.mock("node-fetch", () => ({
  default: mockFetch,
}))

import {
  fetchLocalRegistry,
  fetchRegistries,
  fetchRegistry,
  fetchRegistryNames,
  generateSource,
  generateSources,
  getGeneratedNameMap,
  pruneRegistry,
  transformContent,
  transformIndex,
  transformTemplateContent,
} from "./registry"

function createMockConfig(overrides: Partial<Config> = {}): Config {
  return {
    cwd: "/tmp",
    format: { enabled: false },
    getSection: (value?: string) => {
      if (value && ["components", "hooks", "providers"].includes(value)) {
        return {
          path: `./${value}`,
          resolvedPath: `/tmp/workspaces/ui/src/${value}`,
          section: value as Section,
        }
      }
      return undefined
    },
    getSectionPath: (section: Section) => `./${section}`,
    getSectionResolvedPath: (section: Section) =>
      `/tmp/workspaces/ui/src/${section}`,
    isSection: (s: string): s is Section =>
      ["components", "hooks", "providers"].includes(s),
    jsx: false,
    lint: { enabled: false },
    monorepo: true,
    path: "./workspaces/ui",
    paths: {
      theme: {
        src: "/tmp/workspaces/theme/src",
        index: "/tmp/workspaces/theme/src/index.ts",
        registry: "/tmp/workspaces/theme/src/registry.json",
        root: "/tmp/workspaces/theme",
      },
      ui: {
        src: "/tmp/workspaces/ui/src",
        index: "/tmp/workspaces/ui/src/index.ts",
        registry: "/tmp/workspaces/ui/src/registry.json",
        root: "/tmp/workspaces/ui",
      },
    },
    ...overrides,
  } as Config
}

describe("transformContent", () => {
  test("should transform module imports to relative", () => {
    const config = createMockConfig()
    const content = `import { Button } from "@yamada-ui/react/components/button"\n`
    const result = transformContent("components", content, config, ["button"])
    expect(result).toContain("../button")
  })

  test("should transform cross-section module imports", () => {
    const config = createMockConfig()
    const content = `import { useHook } from "@yamada-ui/react/hooks/use-hook"\n`
    const result = transformContent("components", content, config, ["use-hook"])
    expect(result).toContain("../../hooks/use-hook")
  })

  test("should transform relative imports depth 1", () => {
    const config = createMockConfig()
    const content = `import { helper } from "../helper"\n`
    const result = transformContent("components", content, config, ["helper"])
    expect(result).toContain("../helper")
  })

  test("should replace ungenerated relative depth 1 with package import", () => {
    const config = createMockConfig()
    const content = `import { helper } from "../helper"\n`
    const result = transformContent("components", content, config, [])
    expect(result).toContain("@yamada-ui/react/components/helper")
  })

  test("should handle deeper relative imports", () => {
    const config = createMockConfig()
    const content = `import { useHook } from "../../hooks/use-hook"\n`
    const result = transformContent("components", content, config, ["use-hook"])
    expect(result).toContain("use-hook")
  })

  test("should replace ungenerated deep relative import with package import", () => {
    const config = createMockConfig()
    const content = `import { useHook } from "../../hooks/use-hook"\n`
    const result = transformContent("components", content, config, [])
    expect(result).toContain("@yamada-ui/react/hooks/use-hook")
  })

  test("should skip non-matching imports", () => {
    const config = createMockConfig()
    const content = `import { useState } from "react"\n`
    const result = transformContent("components", content, config, [])
    expect(result).toBe(content)
  })

  test("should not transform ungenerated module imports", () => {
    const config = createMockConfig()
    const content = `import { Button } from "@yamada-ui/react/components/button"\n`
    const result = transformContent("components", content, config, [])
    expect(result).toBe(content)
  })
})

describe("transformTemplateContent", () => {
  test("should replace template placeholders", () => {
    const result = transformTemplateContent("Hello {{name}}!", {
      name: "World",
    })
    expect(result).toBe("Hello World!")
  })

  test("should replace multiple occurrences", () => {
    const result = transformTemplateContent("{{x}} + {{x}}", { x: "1" })
    expect(result).toBe("1 + 1")
  })
})

describe("transformIndex", () => {
  test("should transform generated imports to section paths", () => {
    const config = createMockConfig()
    const content = `export * from "@yamada-ui/react/components/button"\n`
    const result = transformIndex(["button"], content, config)
    expect(result).toContain("./components/button")
  })

  test("should replace non-generated with package path", () => {
    const config = createMockConfig()
    const content = `export * from "./components/button"\n`
    const result = transformIndex([], content, config)
    expect(result).toContain("@yamada-ui/react/components/button")
  })
})

describe("fetchRegistry", () => {
  beforeEach(() => {
    pruneRegistry()
  })

  test("should fetch and cache registry", async () => {
    const registry: Registry = {
      section: "components",
      sources: [{ name: "index.ts", content: "export {}" }],
    }
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(registry),
      ok: true,
    })

    const result = await fetchRegistry("button")
    expect(result).toStrictEqual(registry)

    const cached = await fetchRegistry("button")
    expect(cached).toStrictEqual(registry)
    expect(mockFetch).toHaveBeenCalledTimes(1)
  })

  test("should skip cache when disabled", async () => {
    const registry: Registry = {
      section: "components",
      sources: [],
    }
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(registry),
      ok: true,
    })

    await fetchRegistry("button", { cache: false })
    await fetchRegistry("button", { cache: false })
    expect(mockFetch).toHaveBeenCalledTimes(2)
  })

  test("should throw on 404", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 404 })
    await expect(fetchRegistry("nonexistent")).rejects.toThrow("not found")
  })

  test("should throw on 403", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 403 })
    await expect(fetchRegistry("secret")).rejects.toThrow("do not have access")
  })

  test("should throw on 500", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 })
    await expect(fetchRegistry("broken")).rejects.toThrow("Service unavailable")
  })

  test("should throw on unknown error", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 418 })
    await expect(fetchRegistry("teapot")).rejects.toThrow("An error occurred")
  })

  test("should handle hooks URL pattern", async () => {
    const registry: Registry = { section: "hooks", sources: [] }
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(registry),
      ok: true,
    })
    await fetchRegistry("use-toggle")
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("hooks/use-toggle.json"),
      expect.anything(),
    )
  })

  test("should handle provider URL pattern", async () => {
    const registry: Registry = { section: "providers", sources: [] }
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(registry),
      ok: true,
    })
    await fetchRegistry("auth-provider")
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("providers/auth-provider.json"),
      expect.anything(),
    )
  })

  test("should handle theme URL pattern", async () => {
    const registry: Registry = { section: "theme", sources: [] }
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(registry),
      ok: true,
    })
    await fetchRegistry("theme")
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("theme.json"),
      expect.anything(),
    )
  })

  test("should handle tag in URL", async () => {
    const registry: Registry = { section: "components", sources: [] }
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve(registry),
      ok: true,
    })
    await fetchRegistry("button", { tag: "next" })
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("next/"),
      expect.anything(),
    )
  })
})

describe("fetchRegistryNames", () => {
  beforeEach(() => {
    pruneRegistry()
  })

  test("should extract component names from index", async () => {
    mockFetch.mockResolvedValueOnce({
      json: () =>
        Promise.resolve({
          section: "root",
          sources: [
            {
              name: "index.ts",
              content: `export * from "@yamada-ui/react/components/button"\nexport * from "@yamada-ui/react/hooks/use-toggle"\n`,
            },
          ],
        }),
      ok: true,
    })

    const names = await fetchRegistryNames()
    expect(names).toContain("button")
    expect(names).toContain("use-toggle")
  })
})

describe("fetchRegistries", () => {
  beforeEach(() => {
    pruneRegistry()
  })

  test("should fetch multiple registries", async () => {
    const config = createMockConfig()
    const registry: Registry = {
      section: "components",
      sources: [{ name: "index.ts", content: "export {}" }],
    }

    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(registry),
      ok: true,
    })

    const result = await fetchRegistries(["button", "input"], config)
    expect(result.button).toBeDefined()
    expect(result.input).toBeDefined()
  })

  test("should omit specified names", async () => {
    const config = createMockConfig()
    const registry: Registry = {
      section: "components",
      sources: [],
    }

    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(registry),
      ok: true,
    })

    const result = await fetchRegistries(["button", "input"], config, {
      omit: ["input"],
    })
    expect(result.button).toBeDefined()
    expect(result.input).toBeUndefined()
  })

  test("should fetch dependencies when config has dependencies enabled", async () => {
    const config = createMockConfig({
      components: { dependencies: true },
    } as Partial<Config>)

    mockFetch.mockImplementation((url: string) => {
      if (url.includes("button.json")) {
        return Promise.resolve({
          json: () =>
            Promise.resolve({
              dependencies: {
                components: ["icon"],
                hooks: [],
                providers: [],
              },
              section: "components",
              sources: [],
            }),
          ok: true,
        })
      }
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            section: "components",
            sources: [],
          }),
        ok: true,
      })
    })

    const result = await fetchRegistries(["button"], config, {
      dependents: true,
    })
    expect(result.button).toBeDefined()
    expect(result.icon).toBeDefined()
  })

  test("should fetch dependents recursively", async () => {
    const config = createMockConfig()

    mockFetch.mockImplementation((url: string) => {
      if (url.includes("button.json")) {
        return Promise.resolve({
          json: () =>
            Promise.resolve({
              dependents: {
                components: ["card"],
                hooks: [],
                providers: [],
              },
              section: "components",
              sources: [],
            }),
          ok: true,
        })
      }
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            section: "components",
            sources: [],
          }),
        ok: true,
      })
    })

    const result = await fetchRegistries(["button"], config, {
      dependencies: true,
    })
    expect(result.button).toBeDefined()
    expect(result.card).toBeDefined()
  })
})

describe("pruneRegistry", () => {
  test("should clear cache", async () => {
    const registry: Registry = { section: "components", sources: [] }
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(registry),
      ok: true,
    })

    await fetchRegistry("cached-item")
    pruneRegistry()

    await fetchRegistry("cached-item")
    expect(mockFetch).toHaveBeenCalledTimes(2)
  })
})

describe("fetchLocalRegistry", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should read and parse local registry", async () => {
    const registry: Registry = { section: "components", sources: [] }
    writeFileSync(path.join(tempDir, "registry.json"), JSON.stringify(registry))
    const result = await fetchLocalRegistry(path.join(tempDir, "registry.json"))
    expect(result.section).toBe("components")
  })
})

describe("getGeneratedNameMap", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should return generated component names by section", async () => {
    const srcPath = path.join(tempDir, "src")
    mkdirSync(path.join(srcPath, "components", "button"), { recursive: true })
    mkdirSync(path.join(srcPath, "hooks", "use-toggle"), { recursive: true })
    mkdirSync(path.join(srcPath, "providers"), { recursive: true })

    const config = createMockConfig({
      getSectionResolvedPath: (section: Section) => path.join(srcPath, section),
    })

    const result = await getGeneratedNameMap(config)
    expect(result.components).toContain("button")
    expect(result.hooks).toContain("use-toggle")
    expect(result.providers).toStrictEqual([])
  })

  test("should return empty arrays when sections don't exist", async () => {
    const config = createMockConfig({
      getSectionResolvedPath: () => path.join(tempDir, "nonexistent"),
    })

    const result = await getGeneratedNameMap(config)
    expect(result.components).toStrictEqual([])
    expect(result.hooks).toStrictEqual([])
    expect(result.providers).toStrictEqual([])
  })
})

describe("generateSource", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should generate file from content source", async () => {
    const config = createMockConfig()
    const dirPath = path.join(tempDir, "button")

    await generateSource(
      dirPath,
      "components",
      { name: "index.ts", content: "export const Button = () => {}" },
      config,
    )

    expect(existsSync(path.join(dirPath, "index.ts"))).toBeTruthy()
  })

  test("should generate files from template source", async () => {
    const config = createMockConfig()
    const dirPath = path.join(tempDir, "icon")

    await generateSource(
      dirPath,
      "components",
      {
        name: "icons",
        data: [
          { name: "IconA", value: "a" },
          { name: "IconB", value: "b" },
        ],
        template: "export const {{name}} = '{{value}}'",
      },
      config,
    )

    const iconsDir = path.join(dirPath, "icons")
    expect(existsSync(path.join(iconsDir, "IconA"))).toBeTruthy()
    expect(existsSync(path.join(iconsDir, "IconB"))).toBeTruthy()
  })

  test("should transform tsx template data to jsx when config.jsx is true", async () => {
    const config = createMockConfig({ jsx: true })
    const dirPath = path.join(tempDir, "icon")

    await generateSource(
      dirPath,
      "components",
      {
        name: "icons",
        data: [{ name: "IconA.tsx", value: "a" }],
        template: "export const icon: string = '{{value}}'",
      },
      config,
    )

    const iconsDir = path.join(dirPath, "icons")
    expect(existsSync(path.join(iconsDir, "IconA.jsx"))).toBeTruthy()
    const content = readFileSync(path.join(iconsDir, "IconA.jsx"), "utf-8")
    expect(content).not.toContain(": string")
  })

  test("should transform ts template data to js when config.jsx is true", async () => {
    const config = createMockConfig({ jsx: true })
    const dirPath = path.join(tempDir, "icon")

    await generateSource(
      dirPath,
      "components",
      {
        name: "icons",
        data: [{ name: "IconA.ts", value: "a" }],
        template: "export const icon: string = '{{value}}'",
      },
      config,
    )

    const iconsDir = path.join(dirPath, "icons")
    expect(existsSync(path.join(iconsDir, "IconA.js"))).toBeTruthy()
    const content = readFileSync(path.join(iconsDir, "IconA.js"), "utf-8")
    expect(content).not.toContain(": string")
  })

  test("should transform to jsx when config.jsx is true", async () => {
    const config = createMockConfig({ jsx: true })
    const dirPath = path.join(tempDir, "button")

    await generateSource(
      dirPath,
      "components",
      { name: "index.ts", content: "const x: number = 1\n" },
      config,
    )

    const content = readFileSync(path.join(dirPath, "index.js"), "utf-8")
    expect(content).not.toContain(": number")
  })

  test("should not create file and log when dryRun is true", async () => {
    const config = createMockConfig()
    const dirPath = path.join(tempDir, "button")

    await generateSource(
      dirPath,
      "components",
      { name: "index.ts", content: "export {}" },
      config,
      [],
      { dryRun: true },
    )

    expect(existsSync(path.join(dirPath, "index.ts"))).toBeFalsy()
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("(dry run) Would write:"),
    )
  })
})

describe("transformContentWithFormatAndLint", () => {
  test("should transform content with jsx", async () => {
    const { transformContentWithFormatAndLint } = await import("./registry")
    const config = createMockConfig({ jsx: true })

    const content = `import { Button } from "@yamada-ui/react/components/button"\nconst x: number = 1\n`
    const result = await transformContentWithFormatAndLint(
      "/tmp/test.tsx",
      "components",
      content,
      config,
      ["button"],
    )
    expect(result).not.toContain(": number")
  })

  test("should transform content without jsx", async () => {
    const { transformContentWithFormatAndLint } = await import("./registry")
    const config = createMockConfig()

    const content = `import { Button } from "@yamada-ui/react/components/button"\n`
    const result = await transformContentWithFormatAndLint(
      "/tmp/test.ts",
      "components",
      content,
      config,
      ["button"],
    )
    expect(result).toContain("../button")
  })
})

describe("transformIndexWithFormatAndLint", () => {
  test("should transform index content", async () => {
    const { transformIndexWithFormatAndLint } = await import("./registry")
    const config = createMockConfig()

    const content = `export * from "@yamada-ui/react/components/button"\n`
    const result = await transformIndexWithFormatAndLint(content, config, [
      "button",
    ])
    expect(result).toContain("./components/button")
  })

  test("should transform index with jsx", async () => {
    const { transformIndexWithFormatAndLint } = await import("./registry")
    const config = createMockConfig({ jsx: true })

    const content = `export * from "@yamada-ui/react/components/button"\n`
    const result = await transformIndexWithFormatAndLint(content, config, [
      "button",
    ])
    expect(result).toContain("./components/button")
  })
})

describe("generateSources", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should generate all sources and registry.json", async () => {
    const config = createMockConfig()
    const dirPath = path.join(tempDir, "button")
    const registry: Registry = {
      section: "components",
      sources: [{ name: "index.ts", content: "export {}" }],
    }

    await generateSources(dirPath, registry, config)

    expect(existsSync(path.join(dirPath, "index.ts"))).toBeTruthy()
    expect(existsSync(path.join(dirPath, "registry.json"))).toBeTruthy()
  })

  test("should not create files and log when dryRun is true", async () => {
    const config = createMockConfig()
    const dirPath = path.join(tempDir, "button")
    const registry: Registry = {
      section: "components",
      sources: [{ name: "index.ts", content: "export {}" }],
    }

    await generateSources(dirPath, registry, config, [], { dryRun: true })

    expect(existsSync(path.join(dirPath, "index.ts"))).toBeFalsy()
    expect(existsSync(path.join(dirPath, "registry.json"))).toBeFalsy()
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("(dry run) Would write:"),
    )
  })
})
