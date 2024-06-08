import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestCreate as GitPullRequestCreateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitPullRequestCreateProps = LucideIconProps

/**
 * `GitPullRequestCreate` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestCreate = forwardRef<
  GitPullRequestCreateProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={GitPullRequestCreateIcon} {...props} />
))
