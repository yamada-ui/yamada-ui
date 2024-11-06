import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ellipsis as LucideEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EllipsisIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEllipsisIcon} {...props} />
))

/**
 * @deprecated Use `EllipsisIcon` instead.
 */
export const Ellipsis = EllipsisIcon
