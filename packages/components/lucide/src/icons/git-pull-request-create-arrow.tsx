import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestCreateArrow as GitPullRequestCreateArrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitPullRequestCreateArrowProps = LucideIconProps

/**
 * `GitPullRequestCreateArrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestCreateArrow = forwardRef<
  GitPullRequestCreateArrowProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={GitPullRequestCreateArrowIcon} {...props} />
))
