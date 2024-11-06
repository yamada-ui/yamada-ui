import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestCreate as LucideGitPullRequestCreateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitPullRequestCreateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestCreateIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGitPullRequestCreateIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GitPullRequestCreateIcon` instead.
 */
export const GitPullRequestCreate = GitPullRequestCreateIcon
