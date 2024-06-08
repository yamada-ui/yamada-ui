import { forwardRef } from "@yamada-ui/core"
import { StarOff as StarOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type StarOffProps = LucideIconProps

/**
 * `StarOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StarOff = forwardRef<StarOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StarOffIcon} {...props} />
))
