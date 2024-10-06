import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { User as UserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `User` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const User = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserIcon} {...props} />
))
