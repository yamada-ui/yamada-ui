import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignStartHorizontal as OriginalAlignStartHorizontal } from "lucide-react"

/**
 * `AlignStartHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignStartHorizontalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignStartHorizontal} {...props} />
  ),
)

/**
 * `AlignStartHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignStartHorizontalIcon` instead.
 */
export const AlignStartHorizontal = AlignStartHorizontalIcon
