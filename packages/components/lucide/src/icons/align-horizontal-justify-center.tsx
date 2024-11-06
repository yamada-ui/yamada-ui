import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalJustifyCenter as LucideAlignHorizontalJustifyCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalJustifyCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyCenterIcon = forwardRef<
  LucideIconProps,
  "svg"
>((props, ref) => (
  <LucideIcon
    ref={ref}
    as={LucideAlignHorizontalJustifyCenterIcon}
    {...props}
  />
))

/**
 * @deprecated Use `AlignHorizontalJustifyCenterIcon` instead.
 */
export const AlignHorizontalJustifyCenter = AlignHorizontalJustifyCenterIcon
