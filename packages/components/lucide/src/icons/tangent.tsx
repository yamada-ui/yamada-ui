import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tangent as LucideTangentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TangentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TangentIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTangentIcon} {...props} />
))

/**
 * @deprecated Use `TangentIcon` instead.
 */
export const Tangent = TangentIcon
