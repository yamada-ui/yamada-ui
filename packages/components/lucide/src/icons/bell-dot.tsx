import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BellDot as LucideBellDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BellDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellDotIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBellDotIcon} {...props} />
))

/**
 * @deprecated Use `BellDotIcon` instead.
 */
export const BellDot = BellDotIcon
