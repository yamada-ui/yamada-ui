import type { Locator } from "vitest/browser"
import { locators } from "vitest/browser"

export type { Locator }
export { locators }

// eslint-disable-next-line import-alias/import-alias
export * from "../system"
export * from "./render"
export { page } from "vitest/browser"

declare module "vitest/browser" {
  interface LocatorSelectors {
    getByQuerySelector(selector: string): Locator
  }
}

locators.extend({
  getByQuerySelector(selector: string) {
    return selector
  },
})
