import { toHaveNoViolations } from "@koralle/vitest-axe"
import { vi } from "vitest"
import "@testing-library/jest-dom/vitest"

expect.extend({ toHaveNoViolations })

const { getComputedStyle } = window

window.getComputedStyle = (elt) => getComputedStyle(elt)
window.Element.prototype.scrollTo = () => {}
window.scrollTo = () => {}

if (typeof window.matchMedia !== "function") {
  Object.defineProperty(window, "matchMedia", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

global.TextEncoder = require("util").TextEncoder

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

vi.spyOn(window.HTMLCanvasElement.prototype, "getContext").mockImplementation(
  () => null,
)
