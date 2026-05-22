import type { Detection } from "./resolve"
import { resolveAdapter } from "./resolve"

function createAdapter(name: string, detection: Detection) {
  return { name, detect: () => Promise.resolve(detection) }
}

describe("resolveAdapter", () => {
  test("should return the adapter whose name matches the explicit tool", async () => {
    const a = createAdapter("a", false)
    const b = createAdapter("b", false)

    await expect(resolveAdapter([a, b], a, "/cwd", "b")).resolves.toBe(b)
  })

  test("should prefer a config match over a dependency match", async () => {
    const a = createAdapter("a", "dependency")
    const b = createAdapter("b", "config")

    await expect(resolveAdapter([a, b], a, "/cwd")).resolves.toBe(b)
  })

  test("should pick the first adapter when multiple config matches exist", async () => {
    const a = createAdapter("a", "config")
    const b = createAdapter("b", "config")

    await expect(resolveAdapter([a, b], a, "/cwd")).resolves.toBe(a)
  })

  test("should pick the first adapter when multiple dependency matches exist", async () => {
    const a = createAdapter("a", "dependency")
    const b = createAdapter("b", "dependency")

    await expect(resolveAdapter([a, b], a, "/cwd")).resolves.toBe(a)
  })

  test("should return the fallback when nothing is detected", async () => {
    const a = createAdapter("a", false)
    const b = createAdapter("b", false)
    const fallback = createAdapter("fallback", false)

    await expect(resolveAdapter([a, b], fallback, "/cwd")).resolves.toBe(
      fallback,
    )
  })

  test('should treat tool="auto" the same as no tool', async () => {
    const a = createAdapter("a", "dependency")
    const b = createAdapter("b", "config")

    await expect(resolveAdapter([a, b], a, "/cwd", "auto")).resolves.toBe(b)
  })

  test("should fall back to detection when the explicit tool matches no adapter", async () => {
    const a = createAdapter("a", false)
    const b = createAdapter("b", "config")

    await expect(resolveAdapter([a, b], a, "/cwd", "unknown")).resolves.toBe(b)
  })
})
