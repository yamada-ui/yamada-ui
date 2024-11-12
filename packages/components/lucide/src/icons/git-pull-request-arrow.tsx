import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { GitPullRequestArrow as OriginalGitPullRequestArrow } from "lucide-react"

/**
 * `GitPullRequestArrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestArrowIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalGitPullRequestArrow} {...props} />
  ),
)

/**
 * `GitPullRequestArrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GitPullRequestArrowIcon` instead.
 */
export const GitPullRequestArrow = GitPullRequestArrowIcon
