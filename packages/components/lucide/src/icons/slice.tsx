import { forwardRef } from "@yamada-ui/core"
import { Slice as SliceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SliceProps = LucideIconProps

/**
 * `Slice` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Slice = forwardRef<SliceProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SliceIcon} {...props} />
))
