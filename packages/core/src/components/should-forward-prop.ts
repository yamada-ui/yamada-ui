import { pseudoProperties } from "../pseudos"
import { styleProperties } from "../styles"

const UIProps = new Set([
  ...styleProperties,
  ...pseudoProperties,
  "as",
  "__css",
  "css",
  "sx",
  "focusBorderColor",
  "errorBorderColor",
])

export function shouldForwardProp(
  disableStyleProp?: (prop: string) => boolean,
) {
  return function (prop: string): boolean {
    return (disableStyleProp?.(prop) ?? false) || !UIProps.has(prop)
  }
}
