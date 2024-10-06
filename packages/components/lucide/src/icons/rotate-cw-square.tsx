import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RotateCwSquare as RotateCwSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RotateCwSquare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCwSquare = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RotateCwSquareIcon} {...props} />,
)
