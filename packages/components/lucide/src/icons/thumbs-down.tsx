import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ThumbsDown as LucideThumbsDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ThumbsDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ThumbsDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideThumbsDownIcon} {...props} />,
)

/**
 * @deprecated Use `ThumbsDownIcon` instead.
 */
export const ThumbsDown = ThumbsDownIcon
