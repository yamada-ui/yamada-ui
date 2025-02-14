import { interopDefault } from "./module"

describe("Module", () => {
  test("should return the default export if it exists", () => {
    const module = { default: "defaultExport" }
    expect(interopDefault(module)).toBe("defaultExport")
  })

  test("should return the module itself if no default export exists", () => {
    const module = "moduleWithoutDefault"
    expect(interopDefault(module)).toBe("moduleWithoutDefault")
  })
})
