import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareCode as LucideSquareCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareCodeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSquareCodeIcon} {...props} />,
)

/**
 * @deprecated Use `SquareCodeIcon` instead.
 */
export const SquareCode = SquareCodeIcon
