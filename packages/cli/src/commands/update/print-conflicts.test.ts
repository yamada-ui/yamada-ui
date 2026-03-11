import type { Config, Section } from "../../index.type"
import { describe, expect, test } from "vitest"
import { printConflicts } from "./print-conflicts"

function createMockConfig(): Config {
  return {
    cwd: "/project",
    getSection: () => undefined,
    getSectionPath: (section: Section) => `./${section}`,
    getSectionResolvedPath: (section: Section) =>
      `/project/workspaces/ui/src/${section}`,
    isSection: (s: string): s is Section =>
      ["components", "hooks", "providers"].includes(s),
    jsx: false,
    paths: {
      theme: {
        src: "/project/workspaces/theme/src",
        index: "/project/workspaces/theme/src/index.ts",
        registry: "/project/workspaces/theme/src/registry.json",
        root: "/project/workspaces/theme",
      },
      ui: {
        src: "/project/workspaces/ui/src",
        index: "/project/workspaces/ui/src/index.ts",
        registry: "/project/workspaces/ui/src/registry.json",
        root: "/project/workspaces/ui",
      },
    },
  } as Config
}

describe("printConflicts", () => {
  test("should print index conflicts", () => {
    const config = createMockConfig()
    printConflicts({ index: { "index.ts": config.paths.ui.index } }, config)
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("index.ts"),
    )
  })

  test("should print component conflicts", () => {
    const config = createMockConfig()
    printConflicts(
      {
        button: {
          "index.ts": "/project/workspaces/ui/src/components/button/index.ts",
        },
      },
      config,
    )
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("button"))
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("index.ts"),
    )
  })
})
