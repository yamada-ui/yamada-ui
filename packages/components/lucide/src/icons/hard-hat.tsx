import { forwardRef } from "@yamada-ui/core"
import { HardHat as HardHatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HardHatProps = LucideIconProps

/**
 * `HardHat` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HardHat = forwardRef<HardHatProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HardHatIcon} {...props} />
))
