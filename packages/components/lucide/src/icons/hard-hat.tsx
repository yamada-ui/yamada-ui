import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HardHat as LucideHardHatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HardHatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardHatIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHardHatIcon} {...props} />
))

/**
 * @deprecated Use `HardHatIcon` instead.
 */
export const HardHat = HardHatIcon
