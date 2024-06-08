import { forwardRef } from "@yamada-ui/core"
import { ClipboardPen as ClipboardPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardPenProps = LucideIconProps

/**
 * `ClipboardPen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPen = forwardRef<ClipboardPenProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardPenIcon} {...props} />,
)
