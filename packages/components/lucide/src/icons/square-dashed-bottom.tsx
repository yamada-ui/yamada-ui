import { forwardRef } from "@yamada-ui/core"
import { SquareDashedBottom as SquareDashedBottomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareDashedBottomProps = LucideIconProps

/**
 * `SquareDashedBottom` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedBottom = forwardRef<SquareDashedBottomProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SquareDashedBottomIcon} {...props} />
  ),
)
