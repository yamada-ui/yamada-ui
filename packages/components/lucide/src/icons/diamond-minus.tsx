import { forwardRef } from "@yamada-ui/core"
import { DiamondMinus as DiamondMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DiamondMinusProps = LucideIconProps

/**
 * `DiamondMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiamondMinus = forwardRef<DiamondMinusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={DiamondMinusIcon} {...props} />,
)
