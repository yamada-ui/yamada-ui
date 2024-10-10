import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserRoundX as UserRoundXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserRoundX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundX = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserRoundXIcon} {...props} />
))
