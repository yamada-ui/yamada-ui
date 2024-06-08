import { forwardRef } from "@yamada-ui/core"
import { Music3 as Music3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Music3Props = LucideIconProps

/**
 * `Music3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Music3 = forwardRef<Music3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Music3Icon} {...props} />
))
