import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestCreateArrow as LucideGitPullRequestCreateArrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitPullRequestCreateArrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestCreateArrowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGitPullRequestCreateArrowIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GitPullRequestCreateArrowIcon` instead.
 */
export const GitPullRequestCreateArrow = GitPullRequestCreateArrowIcon
