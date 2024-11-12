import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignVerticalDistributeStart as OriginalAlignVerticalDistributeStart } from "lucide-react"

/**
 * `AlignVerticalDistributeStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeStartIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignVerticalDistributeStart} {...props} />
  ),
)

/**
 * `AlignVerticalDistributeStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignVerticalDistributeStartIcon` instead.
 */
export const AlignVerticalDistributeStart = AlignVerticalDistributeStartIcon
