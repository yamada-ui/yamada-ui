import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { AlignVerticalSpaceBetween as OriginalAlignVerticalSpaceBetween } from "lucide-react"

/**
 * `AlignVerticalSpaceBetweenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalSpaceBetweenIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalAlignVerticalSpaceBetween} {...props} />
  ),
)

/**
 * `AlignVerticalSpaceBetween` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `AlignVerticalSpaceBetweenIcon` instead.
 */
export const AlignVerticalSpaceBetween = AlignVerticalSpaceBetweenIcon
