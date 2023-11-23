import { RenderOptions } from "@testing-library/react"
import { axe, toHaveNoViolations, JestAxeConfigureOptions } from "jest-axe"
import { ReactElement, isValidElement } from "react"
import { render } from "./render"
import "@testing-library/jest-dom"

expect.extend(toHaveNoViolations)

export type A11yProps = RenderOptions & { axeOptions?: JestAxeConfigureOptions }

export const a11y = async (
  ui: ReactElement | HTMLElement,
  { axeOptions, ...rest }: A11yProps = {},
): Promise<void> => {
  const container = isValidElement(ui) ? render(ui, rest).container : ui
  const results = await axe(container as HTMLElement, axeOptions)

  expect(results).toHaveNoViolations()
}
