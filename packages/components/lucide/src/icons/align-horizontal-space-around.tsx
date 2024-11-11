import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignHorizontalSpaceAround as OriginalAlignHorizontalSpaceAround } from "lucide-react"

/**
 * `AlignHorizontalSpaceAroundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalSpaceAroundIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignHorizontalSpaceAround} {...props} />
  ),
)

/**
 * `AlignHorizontalSpaceAround` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignHorizontalSpaceAroundIcon` instead.
 */
export const AlignHorizontalSpaceAround = AlignHorizontalSpaceAroundIcon
