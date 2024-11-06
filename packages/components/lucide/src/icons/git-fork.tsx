import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitFork as LucideGitForkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitForkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitForkIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGitForkIcon} {...props} />
))

/**
 * @deprecated Use `GitForkIcon` instead.
 */
export const GitFork = GitForkIcon
