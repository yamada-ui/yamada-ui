import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalJustifyStart as LucideAlignHorizontalJustifyStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalJustifyStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyStartIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={LucideAlignHorizontalJustifyStartIcon} {...props} />
))

/**
 * @deprecated Use `AlignHorizontalJustifyStartIcon` instead.
 */
export const AlignHorizontalJustifyStart = AlignHorizontalJustifyStartIcon
