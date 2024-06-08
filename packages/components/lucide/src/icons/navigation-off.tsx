import { forwardRef } from "@yamada-ui/core"
import { NavigationOff as NavigationOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NavigationOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NavigationOff = forwardRef<NavigationOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={NavigationOffIcon} {...props} />,
)
