import type { Properties } from "."

type OverrideTypes = { [key in Properties]?: string }

export const overrideTypes: OverrideTypes = {
  outlineStyle: `CSS.Property.OutlineStyle | AnyString`,
  strokeDashoffset: `CSS.Property.StrokeDashoffset | number`,
}
