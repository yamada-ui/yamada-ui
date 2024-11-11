import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignHorizontalDistributeEnd as OriginalAlignHorizontalDistributeEnd } from "lucide-react"

/**
 * `AlignHorizontalDistributeEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeEndIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignHorizontalDistributeEnd} {...props} />
  ),
)

/**
 * `AlignHorizontalDistributeEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignHorizontalDistributeEndIcon` instead.
 */
export const AlignHorizontalDistributeEnd = AlignHorizontalDistributeEndIcon
