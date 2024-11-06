import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestClosed as LucideGitPullRequestClosedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitPullRequestClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestClosedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGitPullRequestClosedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GitPullRequestClosedIcon` instead.
 */
export const GitPullRequestClosed = GitPullRequestClosedIcon
