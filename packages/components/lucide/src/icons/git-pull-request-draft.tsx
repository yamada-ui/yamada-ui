import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { GitPullRequestDraft as OriginalGitPullRequestDraft } from "lucide-react"

/**
 * `GitPullRequestDraftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestDraftIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalGitPullRequestDraft} {...props} />
  ),
)

/**
 * `GitPullRequestDraft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GitPullRequestDraftIcon` instead.
 */
export const GitPullRequestDraft = GitPullRequestDraftIcon
