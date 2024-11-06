import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareStack as LucideSquareStackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareStackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareStackIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareStackIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareStackIcon` instead.
 */
export const SquareStack = SquareStackIcon
