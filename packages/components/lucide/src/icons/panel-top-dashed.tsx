import { forwardRef } from "@yamada-ui/core"
import { PanelTopDashed as PanelTopDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelTopDashedProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelTopDashed = forwardRef<PanelTopDashedProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelTopDashedIcon} {...props} />,
)
