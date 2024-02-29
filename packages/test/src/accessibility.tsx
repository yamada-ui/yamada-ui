import type { RenderOptions } from "@testing-library/react"
import type { AxeMatchers } from "vitest-axe/matchers"
import type { ReactElement } from "react"
import { axe } from "vitest-axe"
import { isValidElement } from "react"
import { render } from "./render"
import { ImpactValue, RunOptions, Spec } from "axe-core"

declare module "vitest" {
  export interface Assertion<T = any> extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}

type A11yConfigureOptions = RunOptions & {
  globalOptions?: Spec
  impactLevels?: ImpactValue[]
}

export type A11yProps = RenderOptions & { axeOptions?: A11yConfigureOptions }

export const a11y = async (
  ui: ReactElement | HTMLElement,
  { axeOptions, ...rest }: A11yProps = {},
): Promise<void> => {
  const container = isValidElement(ui) ? render(ui, rest).container : ui
  const results = await axe(container as HTMLElement, axeOptions)

  expect(results).toHaveNoViolations()
}
