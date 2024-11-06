import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitCommitHorizontal as LucideGitCommitHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitCommitHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCommitHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGitCommitHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GitCommitHorizontalIcon` instead.
 */
export const GitCommitHorizontal = GitCommitHorizontalIcon
