import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitPullRequest as GitPullRequestIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitPullRequest` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequest = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={GitPullRequestIcon} {...props} />,
)
