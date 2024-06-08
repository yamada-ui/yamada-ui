import { forwardRef } from "@yamada-ui/core"
import { RefreshCwOff as RefreshCwOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RefreshCwOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCwOff = forwardRef<RefreshCwOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RefreshCwOffIcon} {...props} />,
)
