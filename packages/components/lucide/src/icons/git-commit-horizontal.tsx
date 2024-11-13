import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { GitCommitHorizontal as OriginalGitCommitHorizontal } from "lucide-react"

/**
 * `GitCommitHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCommitHorizontalIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalGitCommitHorizontal}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `GitCommitHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GitCommitHorizontalIcon` instead.
 */
export const GitCommitHorizontal = GitCommitHorizontalIcon
