import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Martini as LucideMartiniIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MartiniIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MartiniIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMartiniIcon} {...props} />
))

/**
 * @deprecated Use `MartiniIcon` instead.
 */
export const Martini = MartiniIcon
