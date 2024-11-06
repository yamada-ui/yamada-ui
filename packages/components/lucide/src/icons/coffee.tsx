import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Coffee as LucideCoffeeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CoffeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CoffeeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCoffeeIcon} {...props} />
))

/**
 * @deprecated Use `CoffeeIcon` instead.
 */
export const Coffee = CoffeeIcon
