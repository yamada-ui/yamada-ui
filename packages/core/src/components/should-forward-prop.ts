import { pseudoProperties } from "../pseudos"
import { styleProperties } from "../styles"

const UIProps = new Set([
  "__css",
  "as",
  "css",
  "errorBorderColor",
  "focusBorderColor",
  "sx",
  ...pseudoProperties,
  ...styleProperties,
])

export function shouldForwardProp(
  disableStyleProp?: (prop: string) => boolean,
) {
  return function (prop: string): boolean {
    return (disableStyleProp?.(prop) ?? false) || !UIProps.has(prop)
  }
}
