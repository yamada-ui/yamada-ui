import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignCenterHorizontal as OriginalAlignCenterHorizontal } from "lucide-react"

/**
 * `AlignCenterHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignCenterHorizontalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignCenterHorizontal} {...props} />
  ),
)

/**
 * `AlignCenterHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignCenterHorizontalIcon` instead.
 */
export const AlignCenterHorizontal = AlignCenterHorizontalIcon
