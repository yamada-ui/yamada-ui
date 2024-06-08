import { forwardRef } from "@yamada-ui/core"
import { MegaphoneOff as MegaphoneOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MegaphoneOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MegaphoneOff = forwardRef<MegaphoneOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MegaphoneOffIcon} {...props} />,
)
