import { forwardRef } from "@yamada-ui/core"
import { Palette as PaletteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PaletteProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Palette = forwardRef<PaletteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PaletteIcon} {...props} />
))
