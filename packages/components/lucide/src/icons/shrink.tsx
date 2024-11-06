import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Shrink as LucideShrinkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShrinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShrinkIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShrinkIcon} {...props} />
))

/**
 * @deprecated Use `ShrinkIcon` instead.
 */
export const Shrink = ShrinkIcon
