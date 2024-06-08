import { forwardRef } from "@yamada-ui/core"
import { SquareMinus as SquareMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareMinusProps = LucideIconProps

/**
 * `SquareMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMinus = forwardRef<SquareMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareMinusIcon} {...props} />
))
