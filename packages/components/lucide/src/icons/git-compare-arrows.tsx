import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { GitCompareArrows as OriginalGitCompareArrows } from "lucide-react"

/**
 * `GitCompareArrowsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCompareArrowsIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalGitCompareArrows} {...props} />,
)

/**
 * `GitCompareArrows` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `GitCompareArrowsIcon` instead.
 */
export const GitCompareArrows = GitCompareArrowsIcon
