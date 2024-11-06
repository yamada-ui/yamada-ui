import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestArrow as LucideGitPullRequestArrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitPullRequestArrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestArrowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGitPullRequestArrowIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GitPullRequestArrowIcon` instead.
 */
export const GitPullRequestArrow = GitPullRequestArrowIcon
