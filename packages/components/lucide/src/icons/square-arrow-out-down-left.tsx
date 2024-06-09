import { forwardRef } from "@yamada-ui/core"
import { SquareArrowOutDownLeft as SquareArrowOutDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowOutDownLeftProps = LucideIconProps

/**
 * `SquareArrowOutDownLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutDownLeft = forwardRef<
  SquareArrowOutDownLeftProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={SquareArrowOutDownLeftIcon} {...props} />
))
