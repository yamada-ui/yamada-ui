import { forwardRef } from "@yamada-ui/core"
import { Merge as MergeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MergeProps = LucideIconProps

/**
 * `Merge` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Merge = forwardRef<MergeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MergeIcon} {...props} />
))
