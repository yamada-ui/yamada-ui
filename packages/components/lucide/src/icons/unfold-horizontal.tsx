import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { UnfoldHorizontal as OriginalUnfoldHorizontal } from "lucide-react"

/**
 * `UnfoldHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnfoldHorizontalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalUnfoldHorizontal} {...props} />,
)

/**
 * `UnfoldHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `UnfoldHorizontalIcon` instead.
 */
export const UnfoldHorizontal = UnfoldHorizontalIcon
