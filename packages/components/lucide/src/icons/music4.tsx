import { forwardRef } from "@yamada-ui/core"
import { Music4 as Music4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Music4Props = LucideIconProps

/**
 * `Music4` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Music4 = forwardRef<Music4Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Music4Icon} {...props} />
))
