import { forwardRef } from "@yamada-ui/core"
import { MountainSnow as MountainSnowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MountainSnowProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MountainSnow = forwardRef<MountainSnowProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MountainSnowIcon} {...props} />,
)
