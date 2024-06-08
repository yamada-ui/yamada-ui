import { forwardRef } from "@yamada-ui/core"
import { Camera as CameraIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CameraProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Camera = forwardRef<CameraProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CameraIcon} {...props} />
))
