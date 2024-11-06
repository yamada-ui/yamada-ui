import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareMenu as LucideSquareMenuIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareMenuIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMenuIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSquareMenuIcon} {...props} />,
)

/**
 * @deprecated Use `SquareMenuIcon` instead.
 */
export const SquareMenu = SquareMenuIcon
