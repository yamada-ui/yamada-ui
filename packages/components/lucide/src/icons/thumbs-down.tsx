import { forwardRef } from "@yamada-ui/core"
import { ThumbsDown as ThumbsDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ThumbsDownProps = LucideIconProps

/**
 * `ThumbsDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThumbsDown = forwardRef<ThumbsDownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ThumbsDownIcon} {...props} />
))
