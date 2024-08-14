import { forwardRef } from "@yamada-ui/core"
import { SquareSquare as SquareSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareSquareProps = LucideIconProps

/**
 * `SquareSquare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSquare = forwardRef<SquareSquareProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareSquareIcon} {...props} />,
)
