import { forwardRef } from "@yamada-ui/core"
import { SquarePercent as SquarePercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquarePercentProps = LucideIconProps

/**
 * `SquarePercent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePercent = forwardRef<SquarePercentProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquarePercentIcon} {...props} />,
)
