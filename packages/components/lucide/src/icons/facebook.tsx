import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Facebook as LucideFacebookIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FacebookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FacebookIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFacebookIcon} {...props} />
))

/**
 * @deprecated Use `FacebookIcon` instead.
 */
export const Facebook = FacebookIcon
