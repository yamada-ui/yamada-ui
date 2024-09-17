import type { Properties } from "."

type OverrideTypes = { [key in Properties]?: string }

export const overrideTypes: OverrideTypes = {
  strokeDashoffset: `CSS.Property.StrokeDashoffset | number`,
  translate: `CSS.Property.Translate | "yes" | "no"`,
}
