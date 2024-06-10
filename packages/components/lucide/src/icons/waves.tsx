import { forwardRef } from "@yamada-ui/core"
import { Waves as WavesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WavesProps = LucideIconProps

/**
 * `Waves` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Waves = forwardRef<WavesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WavesIcon} {...props} />
))
