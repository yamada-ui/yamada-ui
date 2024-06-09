import { forwardRef } from "@yamada-ui/core"
import { Star as StarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type StarProps = LucideIconProps

/**
 * `Star` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Star = forwardRef<StarProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StarIcon} {...props} />
))
