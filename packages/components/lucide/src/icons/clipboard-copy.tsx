import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardCopy as LucideClipboardCopyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardCopyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardCopyIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClipboardCopyIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClipboardCopyIcon` instead.
 */
export const ClipboardCopy = ClipboardCopyIcon
