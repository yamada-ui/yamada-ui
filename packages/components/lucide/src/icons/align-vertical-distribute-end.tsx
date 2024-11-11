import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignVerticalDistributeEnd as OriginalAlignVerticalDistributeEnd } from "lucide-react"

/**
 * `AlignVerticalDistributeEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeEndIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignVerticalDistributeEnd} {...props} />
  ),
)

/**
 * `AlignVerticalDistributeEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignVerticalDistributeEndIcon` instead.
 */
export const AlignVerticalDistributeEnd = AlignVerticalDistributeEndIcon
