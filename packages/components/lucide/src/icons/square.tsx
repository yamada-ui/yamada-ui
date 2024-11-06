import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Square as LucideSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSquareIcon} {...props} />
))

/**
 * @deprecated Use `SquareIcon` instead.
 */
export const Square = SquareIcon
