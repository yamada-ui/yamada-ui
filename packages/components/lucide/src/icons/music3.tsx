import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Music3 as LucideMusic3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Music3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Music3Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMusic3Icon} {...props} />
))

/**
 * @deprecated Use `Music3Icon` instead.
 */
export const Music3 = Music3Icon
