import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SquareDashedBottomCode as OriginalSquareDashedBottomCode } from "lucide-react"

/**
 * `SquareDashedBottomCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDashedBottomCodeIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalSquareDashedBottomCode} {...props} />
  ),
)

/**
 * `SquareDashedBottomCode` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquareDashedBottomCodeIcon` instead.
 */
export const SquareDashedBottomCode = SquareDashedBottomCodeIcon
