import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CircleChevronLeft as OriginalCircleChevronLeft } from "lucide-react"

/**
 * `CircleChevronLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronLeftIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalCircleChevronLeft} {...props} />,
)

/**
 * `CircleChevronLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleChevronLeftIcon` instead.
 */
export const CircleChevronLeft = CircleChevronLeftIcon
