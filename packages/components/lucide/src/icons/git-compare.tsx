import { forwardRef } from "@yamada-ui/core"
import { GitCompare as GitCompareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitCompareProps = LucideIconProps

/**
 * `GitCompare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCompare = forwardRef<GitCompareProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GitCompareIcon} {...props} />
))
