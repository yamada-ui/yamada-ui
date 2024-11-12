import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignVerticalJustifyEnd as OriginalAlignVerticalJustifyEnd } from "lucide-react"

/**
 * `AlignVerticalJustifyEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyEndIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignVerticalJustifyEnd} {...props} />
  ),
)

/**
 * `AlignVerticalJustifyEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignVerticalJustifyEndIcon` instead.
 */
export const AlignVerticalJustifyEnd = AlignVerticalJustifyEndIcon
