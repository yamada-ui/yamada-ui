import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Merge as LucideMergeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MergeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MergeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMergeIcon} {...props} />
))

/**
 * @deprecated Use `MergeIcon` instead.
 */
export const Merge = MergeIcon
