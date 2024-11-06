import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Unlink as LucideUnlinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UnlinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnlinkIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUnlinkIcon} {...props} />
))

/**
 * @deprecated Use `UnlinkIcon` instead.
 */
export const Unlink = UnlinkIcon
