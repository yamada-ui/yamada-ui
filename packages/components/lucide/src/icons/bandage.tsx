import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bandage as LucideBandageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BandageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BandageIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBandageIcon} {...props} />
))

/**
 * @deprecated Use `BandageIcon` instead.
 */
export const Bandage = BandageIcon
