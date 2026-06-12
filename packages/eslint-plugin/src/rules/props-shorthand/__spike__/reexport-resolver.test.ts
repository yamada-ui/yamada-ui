import * as path from "node:path"
import { fileURLToPath } from "node:url"
import { createReexportResolver } from "./reexport-resolver"

const FIXTURE_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "__fixtures__",
  "case-b",
)
const APP_FILE = path.join(FIXTURE_DIR, "app.tsx")

const resolver = createReexportResolver(["@yamada-ui/react"])

describe("case B: re-export resolution via file parsing without type information", () => {
  test("resolves a name through `export * from` barrel to @yamada-ui/react", () => {
    expect(resolver.resolvesToUI("Box", "./libs/ui", APP_FILE)).toBe(true)
  })

  test("resolves an aliased named re-export", () => {
    expect(resolver.resolvesToUI("UIBox", "./libs/named", APP_FILE)).toBe(true)
  })

  test("does not resolve a name the named re-export does not expose", () => {
    expect(resolver.resolvesToUI("Box", "./libs/named", APP_FILE)).toBe(false)
  })

  test("resolves through a chained relative `export * from`", () => {
    expect(resolver.resolvesToUI("Box", "./libs/chain", APP_FILE)).toBe(true)
  })

  test("does not resolve a barrel of a non-UI package", () => {
    expect(resolver.resolvesToUI("Box", "./libs/other", APP_FILE)).toBe(false)
  })

  test("does not resolve a nonexistent module", () => {
    expect(resolver.resolvesToUI("Box", "./libs/missing", APP_FILE)).toBe(false)
  })

  test("resolves the source package itself directly", () => {
    expect(resolver.resolvesToUI("Box", "@yamada-ui/react", APP_FILE)).toBe(
      true,
    )
  })
})
