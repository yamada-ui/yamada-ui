import { forwardRef } from "@yamada-ui/core"
import { Aperture as ApertureIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ApertureProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Aperture = forwardRef<ApertureProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ApertureIcon} {...props} />
))
