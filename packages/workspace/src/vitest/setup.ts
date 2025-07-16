import { vi } from "vitest"
import * as matchers from "vitest-axe/matchers"
import "vitest-axe/extend-expect"
import "@testing-library/jest-dom/vitest"

expect.extend(matchers)

const { getComputedStyle } = window

window.getComputedStyle = (el) => getComputedStyle(el)
window.Element.prototype.scrollTo = () => void 0
window.scrollTo = () => void 0

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

// @ts-ignore
global.EyeDropper = vi.fn()

vi.spyOn(window.HTMLCanvasElement.prototype, "getContext").mockImplementation(
  () => null,
)
