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

export const shouldForwardProp =
  (disableStyleProp?: (prop: string) => boolean) =>
  (prop: string): boolean =>
    (disableStyleProp?.(prop) ?? false) || !UIProps.has(prop)
