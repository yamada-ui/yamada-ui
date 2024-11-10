import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignHorizontalDistributeCenter as OriginalAlignHorizontalDistributeCenter } from "lucide-react"

/**
 * `AlignHorizontalDistributeCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeCenterIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignHorizontalDistributeCenter} {...props} />
  ),
)

/**
 * `AlignHorizontalDistributeCenter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignHorizontalDistributeCenterIcon` instead.
 */
export const AlignHorizontalDistributeCenter =
  AlignHorizontalDistributeCenterIcon
