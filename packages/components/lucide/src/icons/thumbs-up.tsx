import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ThumbsUp as ThumbsUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ThumbsUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThumbsUp = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ThumbsUpIcon} {...props} />
))
