import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pizza as LucidePizzaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PizzaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PizzaIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePizzaIcon} {...props} />
))

/**
 * @deprecated Use `PizzaIcon` instead.
 */
export const Pizza = PizzaIcon
