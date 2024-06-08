import { forwardRef } from "@yamada-ui/core"
import { SunMedium as SunMediumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SunMediumProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunMedium = forwardRef<SunMediumProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SunMediumIcon} {...props} />
))
