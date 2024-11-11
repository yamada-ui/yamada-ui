import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CircleArrowOutDownRight as OriginalCircleArrowOutDownRight } from "lucide-react"

/**
 * `CircleArrowOutDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutDownRightIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalCircleArrowOutDownRight} {...props} />
  ),
)

/**
 * `CircleArrowOutDownRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleArrowOutDownRightIcon` instead.
 */
export const CircleArrowOutDownRight = CircleArrowOutDownRightIcon
