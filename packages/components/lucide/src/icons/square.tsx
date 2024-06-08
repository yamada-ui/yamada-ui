import { forwardRef } from "@yamada-ui/core"
import { Square as SquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareProps = LucideIconProps

/**
 * `Square` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Square = forwardRef<SquareProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareIcon} {...props} />
))
