import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Magnet as LucideMagnetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MagnetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MagnetIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMagnetIcon} {...props} />
))

/**
 * @deprecated Use `MagnetIcon` instead.
 */
export const Magnet = MagnetIcon
