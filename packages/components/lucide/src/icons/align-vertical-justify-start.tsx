import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignVerticalJustifyStart as OriginalAlignVerticalJustifyStart } from "lucide-react"

/**
 * `AlignVerticalJustifyStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyStartIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignVerticalJustifyStart} {...props} />
  ),
)

/**
 * `AlignVerticalJustifyStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignVerticalJustifyStartIcon` instead.
 */
export const AlignVerticalJustifyStart = AlignVerticalJustifyStartIcon
