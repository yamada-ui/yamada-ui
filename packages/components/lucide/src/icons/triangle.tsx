import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Triangle as LucideTriangleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TriangleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TriangleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTriangleIcon} {...props} />
))

/**
 * @deprecated Use `TriangleIcon` instead.
 */
export const Triangle = TriangleIcon
