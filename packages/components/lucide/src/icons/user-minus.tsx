import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserMinus as LucideUserMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideUserMinusIcon} {...props} />,
)

/**
 * @deprecated Use `UserMinusIcon` instead.
 */
export const UserMinus = UserMinusIcon
