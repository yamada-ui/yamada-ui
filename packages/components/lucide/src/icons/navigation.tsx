import { forwardRef } from "@yamada-ui/core"
import { Navigation as NavigationIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NavigationProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Navigation = forwardRef<NavigationProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NavigationIcon} {...props} />
))
