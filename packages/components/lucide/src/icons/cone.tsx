import { forwardRef } from "@yamada-ui/core"
import { Cone as ConeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ConeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cone = forwardRef<ConeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ConeIcon} {...props} />
))
