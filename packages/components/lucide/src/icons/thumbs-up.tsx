import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ThumbsUp as LucideThumbsUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ThumbsUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThumbsUpIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideThumbsUpIcon} {...props} />
))

/**
 * @deprecated Use `ThumbsUpIcon` instead.
 */
export const ThumbsUp = ThumbsUpIcon
