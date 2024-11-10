import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignEndHorizontal as OriginalAlignEndHorizontal } from "lucide-react"

/**
 * `AlignEndHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignEndHorizontalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalAlignEndHorizontal} {...props} />,
)

/**
 * `AlignEndHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignEndHorizontalIcon` instead.
 */
export const AlignEndHorizontal = AlignEndHorizontalIcon
