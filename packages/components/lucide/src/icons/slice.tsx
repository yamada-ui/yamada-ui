import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Slice as LucideSliceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SliceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SliceIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSliceIcon} {...props} />
))

/**
 * @deprecated Use `SliceIcon` instead.
 */
export const Slice = SliceIcon
