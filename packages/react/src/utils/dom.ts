import type * as React from "react"

export function getEventRelatedTarget(ev: React.FocusEvent | React.MouseEvent) {
  return (ev.relatedTarget ??
    ev.currentTarget.ownerDocument.activeElement) as HTMLElement | null
}
