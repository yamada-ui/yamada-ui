import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignEndVertical as OriginalAlignEndVertical } from "lucide-react"

/**
 * `AlignEndVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignEndVerticalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalAlignEndVertical} {...props} />,
)

/**
 * `AlignEndVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignEndVerticalIcon` instead.
 */
export const AlignEndVertical = AlignEndVerticalIcon
