import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareUser as LucideSquareUserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareUserIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSquareUserIcon} {...props} />,
)

/**
 * @deprecated Use `SquareUserIcon` instead.
 */
export const SquareUser = SquareUserIcon
