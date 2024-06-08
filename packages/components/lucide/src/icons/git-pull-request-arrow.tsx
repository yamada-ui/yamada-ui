import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestArrow as GitPullRequestArrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitPullRequestArrowProps = LucideIconProps

/**
 * `GitPullRequestArrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestArrow = forwardRef<GitPullRequestArrowProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GitPullRequestArrowIcon} {...props} />
  ),
)
