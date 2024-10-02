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
}

global.TextEncoder = require("util").TextEncoder

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.spyOn(window.HTMLCanvasElement.prototype, "getContext").mockImplementation(
  () => null,
)
