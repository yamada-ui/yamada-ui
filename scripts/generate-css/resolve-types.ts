import type { CSSProperties } from "."

type resolveTypes = Partial<Record<CSSProperties, string>>

export const resolveTypes: resolveTypes = {
  strokeDashoffset: `CSS.Property.StrokeDashoffset | number`,
  translate: `CSS.Property.Translate | "yes" | "no"`,
}
