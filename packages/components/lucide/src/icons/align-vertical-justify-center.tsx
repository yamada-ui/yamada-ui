import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignVerticalJustifyCenter as OriginalAlignVerticalJustifyCenter } from "lucide-react"

/**
 * `AlignVerticalJustifyCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyCenterIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignVerticalJustifyCenter} {...props} />
  ),
)

/**
 * `AlignVerticalJustifyCenter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignVerticalJustifyCenterIcon` instead.
 */
export const AlignVerticalJustifyCenter = AlignVerticalJustifyCenterIcon
