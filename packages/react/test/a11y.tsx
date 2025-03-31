import type { AxeCore, AxeMatchers } from "@koralle/vitest-axe"
import type { RenderOptions } from "@testing-library/react"
import type { ReactElement } from "react"
import { axe } from "@koralle/vitest-axe"
import { isArray, isString } from "@yamada-ui/utils"
import { isValidElement } from "react"
import { render } from "./render"

declare module "vitest" {
  export interface Assertion extends AxeMatchers {}
}

type A11yConfigureOptions = AxeCore.RunOptions & {
  globalOptions?: AxeCore.Spec
  impactLevels?: AxeCore.ImpactValue[]
}

export type A11yProps = RenderOptions & { axeOptions?: A11yConfigureOptions }

export async function a11y(
  ui: HTMLElement | ReactElement,
  { axeOptions, ...rest }: A11yProps = {},
): Promise<void> {
  const container = isValidElement(ui) ? render(ui, rest).container : ui
  const results = await axe(container as HTMLElement, axeOptions)

  expect(results).toHaveNoViolations()
}

export function filterVisuallyHidden(targetContent: string) {
  return function (content: string, el: Element | null) {
    if (!el || content !== targetContent) return false

    const style = window.getComputedStyle(el)
    const visuallyHiddenStyle = {
      border: ["0", "0px"],
      clipPath: ["rect(0 0 0 0)", "rect(0px 0px 0px 0px)"],
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: ["0", "0px"],
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px",
    }

    const isVisuallyHidden = Object.entries(visuallyHiddenStyle).every(
      ([key, value]) => {
        if (isArray(value)) {
          const targetValue = style[key as keyof CSSStyleDeclaration]

          return isString(targetValue) && value.includes(targetValue)
        } else {
          return style[key as keyof CSSStyleDeclaration] === value
        }
      },
    )

    return !isVisuallyHidden
  }
}
