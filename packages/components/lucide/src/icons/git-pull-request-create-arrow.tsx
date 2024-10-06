import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestCreateArrow as GitPullRequestCreateArrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitPullRequestCreateArrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestCreateArrow = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GitPullRequestCreateArrowIcon} {...props} />
  ),
)
