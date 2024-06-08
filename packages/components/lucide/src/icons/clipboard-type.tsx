import { forwardRef } from "@yamada-ui/core"
import { ClipboardType as ClipboardTypeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardTypeProps = LucideIconProps

/**
 * `ClipboardType` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardType = forwardRef<ClipboardTypeProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardTypeIcon} {...props} />,
)
