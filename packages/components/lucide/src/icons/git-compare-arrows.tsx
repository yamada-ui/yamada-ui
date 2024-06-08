import { forwardRef } from "@yamada-ui/core"
import { GitCompareArrows as GitCompareArrowsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitCompareArrowsProps = LucideIconProps

/**
 * `GitCompareArrows` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCompareArrows = forwardRef<GitCompareArrowsProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={GitCompareArrowsIcon} {...props} />,
)
