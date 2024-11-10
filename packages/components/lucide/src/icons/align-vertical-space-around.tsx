import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignVerticalSpaceAround as OriginalAlignVerticalSpaceAround } from "lucide-react"

/**
 * `AlignVerticalSpaceAroundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalSpaceAroundIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignVerticalSpaceAround} {...props} />
  ),
)

/**
 * `AlignVerticalSpaceAround` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignVerticalSpaceAroundIcon` instead.
 */
export const AlignVerticalSpaceAround = AlignVerticalSpaceAroundIcon
