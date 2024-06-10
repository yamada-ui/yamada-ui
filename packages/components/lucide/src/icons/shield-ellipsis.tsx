import { forwardRef } from "@yamada-ui/core"
import { ShieldEllipsis as ShieldEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldEllipsisProps = LucideIconProps

/**
 * `ShieldEllipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldEllipsis = forwardRef<ShieldEllipsisProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ShieldEllipsisIcon} {...props} />,
)
