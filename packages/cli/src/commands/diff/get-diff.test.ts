import type { Config } from "../../index.type"
import type { RegistryMap } from "./get-registries-and-files"
import path from "path"
import { describe, expect, test } from "vitest"
import { getDiff, getDirPath } from "./get-diff"

function createConfig(): Config {
  return {
    $schema: "",
    cwd: "/tmp",
    format: { enabled: false },
    getSection: () => undefined,
    getSectionPath: (section: string) => `./${section}`,
    getSectionResolvedPath: (section: string) =>
      path.join("/tmp/workspaces/ui/src", section),
    isSection: (section: string) =>
      ["components", "hooks", "providers"].includes(section),
    jsx: false,
    lint: { enabled: false },
    monorepo: true,
    paths: {
      theme: {
        src: "/tmp/workspaces/theme/src",
        root: "/tmp/workspaces/theme",
      },
      ui: {
        src: "/tmp/workspaces/ui/src",
        index: "/tmp/workspaces/ui/src/index.ts",
        registry: "/tmp/workspaces/ui/src/registry.json",
        root: "/tmp/workspaces/ui",
      },
    },
  } as unknown as Config
}

describe("getDirPath", () => {
  test("should return section-based path for components", () => {
    const config = createConfig()
    const result = getDirPath("components", "button", config)
    expect(result).toContain("components/button")
  })

  test("should return ui.src for non-section", () => {
    const config = {
      ...createConfig(),
      isSection: () => false,
      paths: {
        theme: { src: "/tmp/theme" },
        ui: { src: "/tmp/src" },
      },
    } as unknown as Config
    const result = getDirPath("components", "button", config)
    expect(result).toBe("/tmp/src")
  })

  test("should return theme.src for theme section", () => {
    const config = {
      ...createConfig(),
      isSection: () => false,
      paths: {
        theme: { src: "/tmp/theme/src" },
        ui: { src: "/tmp/src" },
      },
    } as unknown as Config
    const result = getDirPath("theme", "theme", config)
    expect(result).toBe("/tmp/theme/src")
  })
})

describe("getDiff", () => {
  test("should detect content changes in component", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "old content\n" }],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "new content\n" }],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["index.ts"]).toBeDefined()
  })

  test("should detect no changes when content is identical", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "same\n" }],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "same\n" }],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeUndefined()
  })

  test("should detect new remote-only source (no local match)", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [{ name: "styles.ts", content: "new styles\n" }],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["styles.ts"]).toBeDefined()
    expect("remote" in changeMap.button!["styles.ts"]!).toBeTruthy()
  })

  test("should detect removed sources", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            { name: "index.ts", content: "content\n" },
            { name: "old.ts", content: "old content\n" },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "content\n" }],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["old.ts"]).toBeDefined()
    expect("local" in changeMap.button!["old.ts"]!).toBeTruthy()
  })

  test("should detect dependency changes", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          dependencies: {
            components: [],
            externals: ["old-dep@^1.0.0"],
            hooks: [],
            providers: [],
          },
          section: "components",
          sources: [{ name: "index.ts", content: "same\n" }],
        },
      },
      remote: {
        button: {
          dependencies: {
            components: [],
            externals: ["new-dep@^1.0.0"],
            hooks: [],
            providers: [],
          },
          section: "components",
          sources: [{ name: "index.ts", content: "same\n" }],
        },
      },
    }

    const { dependencyMap } = await getDiff(["button"], registryMap, config)

    expect(dependencyMap.add).toContain("new-dep")
    expect(dependencyMap.remove).toContain("old-dep")
  })

  test("should detect dependency version updates", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          dependencies: {
            components: [],
            externals: ["react@^17.0.0"],
            hooks: [],
            providers: [],
          },
          section: "components",
          sources: [{ name: "index.ts", content: "same\n" }],
        },
      },
      remote: {
        button: {
          dependencies: {
            components: [],
            externals: ["react@^18.0.0"],
            hooks: [],
            providers: [],
          },
          section: "components",
          sources: [{ name: "index.ts", content: "same\n" }],
        },
      },
    }

    const { dependencyMap } = await getDiff(["button"], registryMap, config)

    expect(dependencyMap.update).toStrictEqual([
      { name: "react", current: "^17.0.0", wanted: "^18.0.0" },
    ])
  })

  test("should handle index component diff", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        index: {
          section: "root",
          sources: [
            {
              name: "index.ts",
              content: `export * from "@yamada-ui/react/components/old"\n`,
            },
          ],
        },
      },
      remote: {
        index: {
          section: "root",
          sources: [
            {
              name: "index.ts",
              content: `export * from "@yamada-ui/react/components/new"\n`,
            },
          ],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.index).toBeDefined()
  })

  test("should handle template content with data", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            {
              name: "colors",
              data: [{ name: "red.ts", value: "red-old" }],
              template: "export const {{name}} = '{{value}}';\n",
            },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [
            {
              name: "colors",
              data: [{ name: "red.ts", value: "red-new" }],
              template: "export const {{name}} = '{{value}}';\n",
            },
          ],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    // Same template = no diff for template data
    expect(changeMap.button).toBeUndefined()
  })

  test("should detect template changes", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            {
              name: "colors",
              data: [{ name: "red.ts", value: "red" }],
              template: "export const OLD = '{{value}}';\n",
            },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [
            {
              name: "colors",
              data: [{ name: "red.ts", value: "red" }],
              template: "export const NEW = '{{value}}';\n",
            },
          ],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
  })

  test("should handle new template data (no local match)", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [
            {
              name: "colors",
              data: [{ name: "red.ts", value: "red" }],
              template: "export const {{name}} = '{{value}}';\n",
            },
          ],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["colors/red.ts"]).toBeDefined()
  })

  test("should apply jsx transform for remote-only tsx content source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [{ name: "styles.tsx", content: "const x: number = 1\n" }],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["styles.jsx"]).toBeDefined()
    expect("remote" in changeMap.button!["styles.jsx"]!).toBeTruthy()
  })

  test("should apply jsx transform for remote-only ts content source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [{ name: "utils.ts", content: "const x: number = 1\n" }],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["utils.js"]).toBeDefined()
    expect("remote" in changeMap.button!["utils.js"]!).toBeTruthy()
  })

  test("should apply jsx transform for remote-only template source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [
            {
              name: "colors",
              data: [{ name: "red.tsx", value: "red" }],
              template: "export const color = '{{value}}';\n",
            },
          ],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["colors/red.jsx"]).toBeDefined()
    expect("remote" in changeMap.button!["colors/red.jsx"]!).toBeTruthy()
  })

  test("should apply jsx transform for remote-only ts template source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [
            {
              name: "utils",
              data: [{ name: "a.ts", value: "1" }],
              template: "export const val: number = {{value}};\n",
            },
          ],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["utils/a.js"]).toBeDefined()
    expect("remote" in changeMap.button!["utils/a.js"]!).toBeTruthy()
  })

  test("should apply jsx transform for removed tsx content source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            { name: "index.ts", content: "content\n" },
            { name: "old.tsx", content: "const x: number = 1\n" },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "content\n" }],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["old.tsx"]).toBeDefined()
    expect("local" in changeMap.button!["old.tsx"]!).toBeTruthy()
  })

  test("should apply jsx transform for removed jsx content source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            { name: "index.ts", content: "content\n" },
            { name: "old.jsx", content: "const x = 1\n" },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "content\n" }],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["old.jsx"]).toBeDefined()
    expect("local" in changeMap.button!["old.jsx"]!).toBeTruthy()
  })

  test("should apply jsx transform for removed ts content source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            { name: "index.ts", content: "content\n" },
            { name: "old.ts", content: "const x: number = 1\n" },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [{ name: "index.ts", content: "content\n" }],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["old.ts"]).toBeDefined()
    expect("local" in changeMap.button!["old.ts"]!).toBeTruthy()
  })

  test("should apply jsx transform for removed template source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            {
              name: "colors",
              data: [{ name: "red.tsx", value: "red" }],
              template: "export const color = '{{value}}';\n",
            },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["colors/red.tsx"]).toBeDefined()
    expect("local" in changeMap.button!["colors/red.tsx"]!).toBeTruthy()
  })

  test("should apply jsx transform for removed jsx template source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            {
              name: "utils",
              data: [{ name: "a.jsx", value: "1" }],
              template: "export const val = {{value}};\n",
            },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["utils/a.jsx"]).toBeDefined()
    expect("local" in changeMap.button!["utils/a.jsx"]!).toBeTruthy()
  })

  test("should apply jsx transform for removed ts template source", async () => {
    const config = { ...createConfig(), jsx: true }
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            {
              name: "utils",
              data: [{ name: "a.ts", value: "1" }],
              template: "export const val: number = {{value}};\n",
            },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["utils/a.ts"]).toBeDefined()
    expect("local" in changeMap.button!["utils/a.ts"]!).toBeTruthy()
  })

  test("should handle removed template sources", async () => {
    const config = createConfig()
    const registryMap: RegistryMap = {
      local: {
        button: {
          section: "components",
          sources: [
            {
              name: "colors",
              data: [{ name: "red.ts", value: "red" }],
              template: "export const {{name}} = '{{value}}';\n",
            },
          ],
        },
      },
      remote: {
        button: {
          section: "components",
          sources: [],
        },
      },
    }

    const { changeMap } = await getDiff(["button"], registryMap, config)

    expect(changeMap.button).toBeDefined()
    expect(changeMap.button!["colors/red.ts"]).toBeDefined()
  })
})
