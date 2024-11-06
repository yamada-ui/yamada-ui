import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalSpaceAround as LucideAlignHorizontalSpaceAroundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalSpaceAroundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalSpaceAroundIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={LucideAlignHorizontalSpaceAroundIcon} {...props} />
))

/**
 * @deprecated Use `AlignHorizontalSpaceAroundIcon` instead.
 */
export const AlignHorizontalSpaceAround = AlignHorizontalSpaceAroundIcon
