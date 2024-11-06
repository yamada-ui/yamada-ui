import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tent as LucideTentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TentIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTentIcon} {...props} />
))

/**
 * @deprecated Use `TentIcon` instead.
 */
export const Tent = TentIcon
