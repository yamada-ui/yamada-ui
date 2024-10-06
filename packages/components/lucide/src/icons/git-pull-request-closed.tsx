import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestClosed as GitPullRequestClosedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitPullRequestClosed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestClosed = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GitPullRequestClosedIcon} {...props} />
  ),
)
