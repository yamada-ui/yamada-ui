import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CircleChevronRight as OriginalCircleChevronRight } from "lucide-react"

/**
 * `CircleChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronRightIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalCircleChevronRight} {...props} />,
)

/**
 * `CircleChevronRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleChevronRightIcon` instead.
 */
export const CircleChevronRight = CircleChevronRightIcon
