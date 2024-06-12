import { forwardRef } from "@yamada-ui/core"
import { User as UserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserProps = LucideIconProps

/**
 * `User` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const User = forwardRef<UserProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserIcon} {...props} />
))
