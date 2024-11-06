import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserCheck as LucideUserCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideUserCheckIcon} {...props} />,
)

/**
 * @deprecated Use `UserCheckIcon` instead.
 */
export const UserCheck = UserCheckIcon
