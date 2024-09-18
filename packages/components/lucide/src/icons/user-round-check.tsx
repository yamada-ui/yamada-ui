import { forwardRef } from "@yamada-ui/core"
import { UserRoundCheck as UserRoundCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `UserRoundCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundCheck = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UserRoundCheckIcon} {...props} />,
)
