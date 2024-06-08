import { forwardRef } from "@yamada-ui/core"
import { DiamondPercent as DiamondPercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DiamondPercentProps = LucideIconProps

/**
 * `DiamondPercent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiamondPercent = forwardRef<DiamondPercentProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={DiamondPercentIcon} {...props} />,
)
