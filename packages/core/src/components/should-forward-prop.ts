import { pseudosProperties } from "../pseudos"
import { styleProperties } from "../styles"

const UIProps = new Set([
  ...styleProperties,
  ...pseudosProperties,
  "textStyle",
  "layerStyle",
  "apply",
  "lineClamp",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx",
])

const HTMLProps = new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate",
])

export const shouldForwardProp =
  (disableStyleProp?: (prop: string) => boolean) =>
  (prop: string): boolean =>
    HTMLProps.has(prop) ||
    (disableStyleProp?.(prop) ?? false) ||
    !UIProps.has(prop)
