import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GitMerge as GitMergeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitMerge` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitMerge = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GitMergeIcon} {...props} />
))
