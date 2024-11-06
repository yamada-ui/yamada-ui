import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareCheck as LucideSquareCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareCheckIcon` instead.
 */
export const SquareCheck = SquareCheckIcon
