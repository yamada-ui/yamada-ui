import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Soup as LucideSoupIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SoupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SoupIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSoupIcon} {...props} />
))

/**
 * @deprecated Use `SoupIcon` instead.
 */
export const Soup = SoupIcon
