import { forwardRef } from "@yamada-ui/core"
import { GitCommitVertical as GitCommitVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitCommitVerticalProps = LucideIconProps

/**
 * `GitCommitVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCommitVertical = forwardRef<GitCommitVerticalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GitCommitVerticalIcon} {...props} />
  ),
)
