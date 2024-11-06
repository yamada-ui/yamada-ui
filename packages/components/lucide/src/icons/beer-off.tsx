import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BeerOff as LucideBeerOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BeerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeerOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBeerOffIcon} {...props} />
))

/**
 * @deprecated Use `BeerOffIcon` instead.
 */
export const BeerOff = BeerOffIcon
