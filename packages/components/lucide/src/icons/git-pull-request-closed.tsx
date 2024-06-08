import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestClosed as GitPullRequestClosedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitPullRequestClosedProps = LucideIconProps

/**
 * `GitPullRequestClosed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestClosed = forwardRef<
  GitPullRequestClosedProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={GitPullRequestClosedIcon} {...props} />
))
