import { forwardRef } from "@yamada-ui/core"
import { BellMinus as BellMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BellMinusProps = LucideIconProps

/**
 * `BellMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellMinus = forwardRef<BellMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BellMinusIcon} {...props} />
))
