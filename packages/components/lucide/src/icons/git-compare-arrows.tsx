import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitCompareArrows as LucideGitCompareArrowsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitCompareArrowsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCompareArrowsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGitCompareArrowsIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GitCompareArrowsIcon` instead.
 */
export const GitCompareArrows = GitCompareArrowsIcon
