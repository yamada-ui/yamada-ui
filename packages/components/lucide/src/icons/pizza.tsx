import { forwardRef } from "@yamada-ui/core"
import { Pizza as PizzaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PizzaProps = LucideIconProps

/**
 * `Pizza` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pizza = forwardRef<PizzaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PizzaIcon} {...props} />
))
