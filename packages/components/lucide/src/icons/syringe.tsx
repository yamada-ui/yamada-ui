import { forwardRef } from "@yamada-ui/core"
import { Syringe as SyringeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SyringeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Syringe = forwardRef<SyringeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SyringeIcon} {...props} />
))
