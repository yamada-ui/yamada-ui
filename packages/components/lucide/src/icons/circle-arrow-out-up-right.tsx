import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CircleArrowOutUpRight as OriginalCircleArrowOutUpRight } from "lucide-react"

/**
 * `CircleArrowOutUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutUpRightIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalCircleArrowOutUpRight} {...props} />
  ),
)

/**
 * `CircleArrowOutUpRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleArrowOutUpRightIcon` instead.
 */
export const CircleArrowOutUpRight = CircleArrowOutUpRightIcon
