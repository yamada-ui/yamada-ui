import * as matchers from "vitest-axe/matchers"
import "vitest-axe/extend-expect"
import "@testing-library/jest-dom/vitest"

expect.extend(matchers)

if (typeof window.matchMedia !== "function")
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    enumerable: true,
    value: (query: string) => ({
      addEventListener: () => {},
      addListener: () => {},
      dispatchEvent: () => false,
      matches: false,
      media: query,
      removeEventListener: () => {},
      removeListener: () => {},
      onchange: null,
    }),
    writable: true,
  })

if (typeof globalThis.ResizeObserver !== "function") {
  class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(globalThis, "ResizeObserver", {
    configurable: true,
    value: ResizeObserverMock,
    writable: true,
  })
}
