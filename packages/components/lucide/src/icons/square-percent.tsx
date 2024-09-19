import { forwardRef } from "@yamada-ui/core"
import { SquarePercent as SquarePercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `SquarePercent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePercent = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquarePercentIcon} {...props} />,
)
