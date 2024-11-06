import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dessert as LucideDessertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DessertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DessertIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDessertIcon} {...props} />
))

/**
 * @deprecated Use `DessertIcon` instead.
 */
export const Dessert = DessertIcon
