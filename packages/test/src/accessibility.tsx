import type { RenderOptions } from "@testing-library/react"
import type { ImpactValue, RunOptions, Spec } from "axe-core"
import type { ReactElement } from "react"
import { isValidElement } from "react"
import { axe } from "vitest-axe"
import type { AxeMatchers } from "vitest-axe/matchers"
import { render } from "./render"

declare module "vitest" {
  export interface Assertion extends AxeMatchers {}
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
