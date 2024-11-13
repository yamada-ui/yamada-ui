import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { GitCommitVertical as OriginalGitCommitVertical } from "lucide-react"

/**
 * `GitCommitVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCommitVerticalIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalGitCommitVertical}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `GitCommitVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GitCommitVerticalIcon` instead.
 */
export const GitCommitVertical = GitCommitVerticalIcon
