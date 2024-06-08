import { forwardRef } from "@yamada-ui/core"
import { Dessert as DessertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DessertProps = LucideIconProps

/**
 * `Dessert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dessert = forwardRef<DessertProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DessertIcon} {...props} />
))
