import { forwardRef } from "@yamada-ui/core"
import { TowerControl as TowerControlIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TowerControlProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TowerControl = forwardRef<TowerControlProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TowerControlIcon} {...props} />,
)
