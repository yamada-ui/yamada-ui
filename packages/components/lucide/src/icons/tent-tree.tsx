import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TentTree as LucideTentTreeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TentTreeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TentTreeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTentTreeIcon} {...props} />
))

/**
 * @deprecated Use `TentTreeIcon` instead.
 */
export const TentTree = TentTreeIcon
