import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClipboardPaste as LucideClipboardPasteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClipboardPasteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPasteIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClipboardPasteIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClipboardPasteIcon` instead.
 */
export const ClipboardPaste = ClipboardPasteIcon
