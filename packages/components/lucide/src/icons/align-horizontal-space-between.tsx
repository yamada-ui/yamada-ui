import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalSpaceBetween as LucideAlignHorizontalSpaceBetweenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalSpaceBetweenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalSpaceBetweenIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={LucideAlignHorizontalSpaceBetweenIcon} {...props} />
))

/**
 * @deprecated Use `AlignHorizontalSpaceBetweenIcon` instead.
 */
export const AlignHorizontalSpaceBetween = AlignHorizontalSpaceBetweenIcon
