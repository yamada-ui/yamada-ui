import { forwardRef } from "@yamada-ui/core"
import { UserRoundPlus as UserRoundPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `UserRoundPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundPlus = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UserRoundPlusIcon} {...props} />,
)
