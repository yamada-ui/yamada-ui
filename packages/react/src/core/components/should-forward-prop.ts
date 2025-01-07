import { pseudoProperties } from "../pseudos"
import { styleProperties } from "../styles"

export const uiProps = new Set(["as", "css"])
export const styleProps = new Set<string>([
  ...pseudoProperties,
  ...styleProperties,
])

export function createShouldForwardProp(forwardProps?: string[]) {
  return function (prop: string): boolean {
    if (forwardProps?.includes(prop)) return true

    return !uiProps.has(prop) && !styleProps.has(prop)
  }
}
