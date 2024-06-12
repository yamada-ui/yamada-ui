import { forwardRef } from "@yamada-ui/core"
import { SquareDashedBottomCode as SquareDashedBottomCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareDashedBottomCodeProps = LucideIconProps

/**
 * `SquareDashedBottomCode` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedBottomCode = forwardRef<
  SquareDashedBottomCodeProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={SquareDashedBottomCodeIcon} {...props} />
))
