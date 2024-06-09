import { forwardRef } from "@yamada-ui/core"
import { BeerOff as BeerOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BeerOffProps = LucideIconProps

/**
 * `BeerOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeerOff = forwardRef<BeerOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BeerOffIcon} {...props} />
))
