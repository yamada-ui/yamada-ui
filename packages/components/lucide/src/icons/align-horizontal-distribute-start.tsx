import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignHorizontalDistributeStart as OriginalAlignHorizontalDistributeStart } from "lucide-react"

/**
 * `AlignHorizontalDistributeStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeStartIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignHorizontalDistributeStart} {...props} />
  ),
)

/**
 * `AlignHorizontalDistributeStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignHorizontalDistributeStartIcon` instead.
 */
export const AlignHorizontalDistributeStart = AlignHorizontalDistributeStartIcon
