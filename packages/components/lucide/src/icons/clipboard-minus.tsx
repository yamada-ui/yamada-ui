import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardMinus as LucideClipboardMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClipboardMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClipboardMinusIcon` instead.
 */
export const ClipboardMinus = ClipboardMinusIcon
