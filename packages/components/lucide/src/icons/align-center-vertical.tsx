import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignCenterVertical as OriginalAlignCenterVertical } from "lucide-react"

/**
 * `AlignCenterVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterVerticalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignCenterVertical} {...props} />
  ),
)

/**
 * `AlignCenterVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignCenterVerticalIcon` instead.
 */
export const AlignCenterVertical = AlignCenterVerticalIcon
