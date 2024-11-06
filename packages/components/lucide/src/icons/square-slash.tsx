import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareSlash as LucideSquareSlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSlashIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareSlashIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareSlashIcon` instead.
 */
export const SquareSlash = SquareSlashIcon
