import { forwardRef } from "@yamada-ui/core"
import { Telescope as TelescopeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TelescopeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Telescope = forwardRef<TelescopeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TelescopeIcon} {...props} />
))
