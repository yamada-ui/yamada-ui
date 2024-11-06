import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardType as LucideClipboardTypeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardTypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardTypeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClipboardTypeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClipboardTypeIcon` instead.
 */
export const ClipboardType = ClipboardTypeIcon
