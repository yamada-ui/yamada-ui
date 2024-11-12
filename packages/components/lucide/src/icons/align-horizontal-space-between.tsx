import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignHorizontalSpaceBetween as OriginalAlignHorizontalSpaceBetween } from "lucide-react"

/**
 * `AlignHorizontalSpaceBetweenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalSpaceBetweenIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignHorizontalSpaceBetween} {...props} />
  ),
)

/**
 * `AlignHorizontalSpaceBetween` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignHorizontalSpaceBetweenIcon` instead.
 */
export const AlignHorizontalSpaceBetween = AlignHorizontalSpaceBetweenIcon
