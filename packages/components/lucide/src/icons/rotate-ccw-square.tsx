import { forwardRef } from "@yamada-ui/core"
import { RotateCcwSquare as RotateCcwSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RotateCcwSquareProps = LucideIconProps

/**
 * `RotateCcwSquare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCcwSquare = forwardRef<RotateCcwSquareProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RotateCcwSquareIcon} {...props} />,
)
