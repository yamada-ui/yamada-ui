import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserRoundSearch as UserRoundSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserRoundSearch` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundSearch = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UserRoundSearchIcon} {...props} />,
)
