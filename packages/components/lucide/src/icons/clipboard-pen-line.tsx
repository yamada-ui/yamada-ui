import { forwardRef } from "@yamada-ui/core"
import { ClipboardPenLine as ClipboardPenLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardPenLineProps = LucideIconProps

/**
 * `ClipboardPenLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardPenLine = forwardRef<ClipboardPenLineProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardPenLineIcon} {...props} />,
)
