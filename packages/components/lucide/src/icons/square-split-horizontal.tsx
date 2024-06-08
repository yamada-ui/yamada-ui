import { forwardRef } from "@yamada-ui/core"
import { SquareSplitHorizontal as SquareSplitHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareSplitHorizontalProps = LucideIconProps

/**
 * `SquareSplitHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSplitHorizontal = forwardRef<
  SquareSplitHorizontalProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={SquareSplitHorizontalIcon} {...props} />
))
