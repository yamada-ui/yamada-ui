import * as matchers from "vitest-axe/matchers"
import "vitest-axe/extend-expect"
import "@testing-library/jest-dom/vitest"

expect.extend(matchers)

if (typeof window.matchMedia !== "function")
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    enumerable: true,
    value: vi.fn().mockImplementation((query) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: false,
      media: query,
      removeEventListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
    })),
    writable: true,
  })

if (typeof globalThis.ResizeObserver !== "function") {
  class ResizeObserverMock {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  }

  Object.defineProperty(globalThis, "ResizeObserver", {
    configurable: true,
    value: ResizeObserverMock,
    writable: true,
  })
}
