import { forwardRef } from "@yamada-ui/core"
import { Ampersands as AmpersandsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AmpersandsProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ampersands = forwardRef<AmpersandsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AmpersandsIcon} {...props} />
))
