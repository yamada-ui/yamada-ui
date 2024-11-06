import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Waves as LucideWavesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WavesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WavesIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWavesIcon} {...props} />
))

/**
 * @deprecated Use `WavesIcon` instead.
 */
export const Waves = WavesIcon
