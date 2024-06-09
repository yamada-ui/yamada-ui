import { forwardRef } from "@yamada-ui/core"
import { ThumbsUp as ThumbsUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ThumbsUpProps = LucideIconProps

/**
 * `ThumbsUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThumbsUp = forwardRef<ThumbsUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ThumbsUpIcon} {...props} />
))
