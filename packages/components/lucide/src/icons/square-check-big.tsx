import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareCheckBig as LucideSquareCheckBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareCheckBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareCheckBigIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareCheckBigIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareCheckBigIcon` instead.
 */
export const SquareCheckBig = SquareCheckBigIcon
