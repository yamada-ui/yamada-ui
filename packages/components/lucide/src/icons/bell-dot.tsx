import { forwardRef } from "@yamada-ui/core"
import { BellDot as BellDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BellDotProps = LucideIconProps

/**
 * `BellDot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellDot = forwardRef<BellDotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BellDotIcon} {...props} />
))
