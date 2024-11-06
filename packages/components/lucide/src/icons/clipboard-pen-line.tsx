import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardPenLine as LucideClipboardPenLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardPenLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPenLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClipboardPenLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClipboardPenLineIcon` instead.
 */
export const ClipboardPenLine = ClipboardPenLineIcon
