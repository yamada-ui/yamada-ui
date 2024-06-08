import { forwardRef } from "@yamada-ui/core"
import { Axis3d as Axis3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Axis3dProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Axis3d = forwardRef<Axis3dProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Axis3dIcon} {...props} />
))
