import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BoomBox as LucideBoomBoxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BoomBoxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoomBoxIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBoomBoxIcon} {...props} />
))

/**
 * @deprecated Use `BoomBoxIcon` instead.
 */
export const BoomBox = BoomBoxIcon
