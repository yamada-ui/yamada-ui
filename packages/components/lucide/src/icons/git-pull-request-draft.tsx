import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestDraft as LucideGitPullRequestDraftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitPullRequestDraftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestDraftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGitPullRequestDraftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GitPullRequestDraftIcon` instead.
 */
export const GitPullRequestDraft = GitPullRequestDraftIcon
