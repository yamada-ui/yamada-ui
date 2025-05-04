import type * as React from "react"

export function getEventRelatedTarget(ev: React.FocusEvent | React.MouseEvent) {
  return (ev.relatedTarget ??
    ev.currentTarget.ownerDocument.activeElement) as HTMLElement | null
}

const visuallyHiddenStyle = {
  border: "0px",
  clipPath: "rect(0px 0px 0px 0px)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0px",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
} satisfies React.CSSProperties

export const visuallyHiddenAttributes = {
  style: visuallyHiddenStyle,
  "aria-hidden": true,
  tabIndex: -1,
} satisfies React.HTMLAttributes<HTMLElement>
