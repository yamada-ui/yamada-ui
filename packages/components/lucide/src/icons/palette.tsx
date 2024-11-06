import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Palette as LucidePaletteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PaletteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaletteIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePaletteIcon} {...props} />
))

/**
 * @deprecated Use `PaletteIcon` instead.
 */
export const Palette = PaletteIcon
