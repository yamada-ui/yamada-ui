import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitGraph as LucideGitGraphIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitGraphIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitGraphIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGitGraphIcon} {...props} />
))

/**
 * @deprecated Use `GitGraphIcon` instead.
 */
export const GitGraph = GitGraphIcon
