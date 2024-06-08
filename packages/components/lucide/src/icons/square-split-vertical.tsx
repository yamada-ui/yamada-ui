import { forwardRef } from "@yamada-ui/core"
import { SquareSplitVertical as SquareSplitVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareSplitVerticalProps = LucideIconProps

/**
 * `SquareSplitVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSplitVertical = forwardRef<SquareSplitVerticalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SquareSplitVerticalIcon} {...props} />
  ),
)
