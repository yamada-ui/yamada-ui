import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareRadical as LucideSquareRadicalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareRadicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareRadicalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareRadicalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareRadicalIcon` instead.
 */
export const SquareRadical = SquareRadicalIcon
