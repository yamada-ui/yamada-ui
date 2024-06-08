import { forwardRef } from "@yamada-ui/core"
import { Club as ClubIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClubProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Club = forwardRef<ClubProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ClubIcon} {...props} />
))
