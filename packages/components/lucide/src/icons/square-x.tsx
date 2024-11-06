import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareX as LucideSquareXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSquareXIcon} {...props} />
))

/**
 * @deprecated Use `SquareXIcon` instead.
 */
export const SquareX = SquareXIcon
