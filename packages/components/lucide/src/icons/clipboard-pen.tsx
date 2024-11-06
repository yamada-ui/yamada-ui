import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardPen as LucideClipboardPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClipboardPenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClipboardPenIcon` instead.
 */
export const ClipboardPen = ClipboardPenIcon
