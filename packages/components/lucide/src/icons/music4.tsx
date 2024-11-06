import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Music4 as LucideMusic4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Music4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Music4Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMusic4Icon} {...props} />
))

/**
 * @deprecated Use `Music4Icon` instead.
 */
export const Music4 = Music4Icon
