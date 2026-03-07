import { describe, expect, test, vi } from "vitest"

describe("useOnline server snapshot", () => {
  test("uses default getServerSnapshot that returns true", async () => {
    vi.resetModules()

    const useSyncExternalStore = vi.fn(
      (
        _subscribe: () => () => void,
        _getSnapshot: () => boolean,
        getServerSnapshot: () => boolean,
      ) => getServerSnapshot(),
    )

    vi.doMock("react", () => ({ useSyncExternalStore }))

    const { useOnline } = await import("./")

    expect(useOnline()).toBeTruthy()
    expect(useSyncExternalStore).toHaveBeenCalledTimes(1)
  })

  test("uses provided getServerSnapshot", async () => {
    vi.resetModules()

    const useSyncExternalStore = vi.fn(
      (
        _subscribe: () => () => void,
        _getSnapshot: () => boolean,
        getServerSnapshot: () => boolean,
      ) => getServerSnapshot(),
    )

    vi.doMock("react", () => ({ useSyncExternalStore }))

    const { useOnline } = await import("./")

    expect(useOnline(() => false)).toBeFalsy()
    expect(useSyncExternalStore).toHaveBeenCalledTimes(1)
  })
})
