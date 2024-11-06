import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalJustifyCenter as LucideAlignVerticalJustifyCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignVerticalJustifyCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyCenterIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={LucideAlignVerticalJustifyCenterIcon} {...props} />
))

/**
 * @deprecated Use `AlignVerticalJustifyCenterIcon` instead.
 */
export const AlignVerticalJustifyCenter = AlignVerticalJustifyCenterIcon
