import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SquareSplitVertical as OriginalSquareSplitVertical } from "lucide-react"

/**
 * `SquareSplitVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSplitVerticalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalSquareSplitVertical} {...props} />
  ),
)

/**
 * `SquareSplitVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquareSplitVerticalIcon` instead.
 */
export const SquareSplitVertical = SquareSplitVerticalIcon
