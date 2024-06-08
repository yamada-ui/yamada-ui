import { forwardRef } from "@yamada-ui/core"
import { ClipboardPaste as ClipboardPasteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardPasteProps = LucideIconProps

/**
 * `ClipboardPaste` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPaste = forwardRef<ClipboardPasteProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardPasteIcon} {...props} />,
)
