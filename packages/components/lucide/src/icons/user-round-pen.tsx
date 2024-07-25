import { forwardRef } from "@yamada-ui/core"
import { UserRoundPen as UserRoundPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserRoundPenProps = LucideIconProps

/**
 * `UserRoundPen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundPen = forwardRef<UserRoundPenProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UserRoundPenIcon} {...props} />,
)
