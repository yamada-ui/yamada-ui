import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SlidersVertical as OriginalSlidersVertical } from "lucide-react"

/**
 * `SlidersVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlidersVerticalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalSlidersVertical} {...props} />,
)

/**
 * `SlidersVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SlidersVerticalIcon` instead.
 */
export const SlidersVertical = SlidersVerticalIcon
