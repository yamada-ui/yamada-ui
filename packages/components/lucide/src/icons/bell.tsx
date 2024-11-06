import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bell as LucideBellIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBellIcon} {...props} />
))

/**
 * @deprecated Use `BellIcon` instead.
 */
export const Bell = BellIcon
