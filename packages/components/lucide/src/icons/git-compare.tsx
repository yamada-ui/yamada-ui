import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitCompare as LucideGitCompareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitCompareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCompareIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideGitCompareIcon} {...props} />,
)

/**
 * @deprecated Use `GitCompareIcon` instead.
 */
export const GitCompare = GitCompareIcon
