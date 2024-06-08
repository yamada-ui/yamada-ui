import { forwardRef } from "@yamada-ui/core"
import { GitBranchPlus as GitBranchPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitBranchPlusProps = LucideIconProps

/**
 * `GitBranchPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitBranchPlus = forwardRef<GitBranchPlusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={GitBranchPlusIcon} {...props} />,
)
