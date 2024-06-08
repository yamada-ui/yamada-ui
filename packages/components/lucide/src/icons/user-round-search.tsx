import { forwardRef } from "@yamada-ui/core"
import { UserRoundSearch as UserRoundSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserRoundSearchProps = LucideIconProps

/**
 * `UserRoundSearch` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundSearch = forwardRef<UserRoundSearchProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UserRoundSearchIcon} {...props} />,
)
