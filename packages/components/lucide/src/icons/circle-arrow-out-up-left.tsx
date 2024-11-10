import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CircleArrowOutUpLeft as OriginalCircleArrowOutUpLeft } from "lucide-react"

/**
 * `CircleArrowOutUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutUpLeftIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalCircleArrowOutUpLeft} {...props} />
  ),
)

/**
 * `CircleArrowOutUpLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleArrowOutUpLeftIcon` instead.
 */
export const CircleArrowOutUpLeft = CircleArrowOutUpLeftIcon
