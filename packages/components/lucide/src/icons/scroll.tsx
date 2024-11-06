import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Scroll as LucideScrollIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScrollIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScrollIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScrollIcon} {...props} />
))

/**
 * @deprecated Use `ScrollIcon` instead.
 */
export const Scroll = ScrollIcon
