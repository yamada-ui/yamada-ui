import { forwardRef } from "@yamada-ui/core"
import { MapPinOff as MapPinOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapPinOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinOff = forwardRef<MapPinOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MapPinOffIcon} {...props} />
))
