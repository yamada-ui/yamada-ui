import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { GitPullRequestClosed as OriginalGitPullRequestClosed } from "lucide-react"

/**
 * `GitPullRequestClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestClosedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalGitPullRequestClosed} {...props} />
  ),
)

/**
 * `GitPullRequestClosed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GitPullRequestClosedIcon` instead.
 */
export const GitPullRequestClosed = GitPullRequestClosedIcon
