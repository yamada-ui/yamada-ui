import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignHorizontalJustifyCenter as OriginalAlignHorizontalJustifyCenter } from "lucide-react"

/**
 * `AlignHorizontalJustifyCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyCenterIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignHorizontalJustifyCenter} {...props} />
  ),
)

/**
 * `AlignHorizontalJustifyCenter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignHorizontalJustifyCenterIcon` instead.
 */
export const AlignHorizontalJustifyCenter = AlignHorizontalJustifyCenterIcon
