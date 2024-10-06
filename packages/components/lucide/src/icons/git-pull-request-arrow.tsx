import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestArrow as GitPullRequestArrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitPullRequestArrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestArrow = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GitPullRequestArrowIcon} {...props} />
  ),
)
