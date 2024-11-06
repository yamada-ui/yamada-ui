import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitMerge as LucideGitMergeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitMergeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitMergeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGitMergeIcon} {...props} />
))

/**
 * @deprecated Use `GitMergeIcon` instead.
 */
export const GitMerge = GitMergeIcon
