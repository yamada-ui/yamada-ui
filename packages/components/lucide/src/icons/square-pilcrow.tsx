import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquarePilcrow as LucideSquarePilcrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquarePilcrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePilcrowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquarePilcrowIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquarePilcrowIcon` instead.
 */
export const SquarePilcrow = SquarePilcrowIcon
