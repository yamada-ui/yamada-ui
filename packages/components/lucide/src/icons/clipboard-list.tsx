import { forwardRef } from "@yamada-ui/core"
import { ClipboardList as ClipboardListIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardListProps = LucideIconProps

/**
 * `ClipboardList` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardList = forwardRef<ClipboardListProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardListIcon} {...props} />,
)
