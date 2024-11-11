import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SeparatorHorizontal as OriginalSeparatorHorizontal } from "lucide-react"

/**
 * `SeparatorHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SeparatorHorizontalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalSeparatorHorizontal} {...props} />
  ),
)

/**
 * `SeparatorHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SeparatorHorizontalIcon` instead.
 */
export const SeparatorHorizontal = SeparatorHorizontalIcon
