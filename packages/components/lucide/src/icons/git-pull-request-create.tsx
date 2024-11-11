import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { GitPullRequestCreate as OriginalGitPullRequestCreate } from "lucide-react"

/**
 * `GitPullRequestCreateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestCreateIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalGitPullRequestCreate} {...props} />
  ),
)

/**
 * `GitPullRequestCreate` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GitPullRequestCreateIcon` instead.
 */
export const GitPullRequestCreate = GitPullRequestCreateIcon
