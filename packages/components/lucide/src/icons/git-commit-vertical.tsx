import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitCommitVertical as LucideGitCommitVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitCommitVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCommitVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGitCommitVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GitCommitVerticalIcon` instead.
 */
export const GitCommitVertical = GitCommitVerticalIcon
