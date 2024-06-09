import { forwardRef } from "@yamada-ui/core"
import { Users as UsersIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UsersProps = LucideIconProps

/**
 * `Users` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Users = forwardRef<UsersProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UsersIcon} {...props} />
))
