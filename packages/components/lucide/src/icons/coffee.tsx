import { forwardRef } from "@yamada-ui/core"
import { Coffee as CoffeeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CoffeeProps = LucideIconProps

/**
 * `Coffee` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Coffee = forwardRef<CoffeeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CoffeeIcon} {...props} />
))
