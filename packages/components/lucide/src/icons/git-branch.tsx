import { forwardRef } from "@yamada-ui/core"
import { GitBranch as GitBranchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitBranchProps = LucideIconProps

/**
 * `GitBranch` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitBranch = forwardRef<GitBranchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GitBranchIcon} {...props} />
))
