import { forwardRef } from "@yamada-ui/core"
import { Magnet as MagnetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MagnetProps = LucideIconProps

/**
 * `Magnet` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Magnet = forwardRef<MagnetProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MagnetIcon} {...props} />
))
