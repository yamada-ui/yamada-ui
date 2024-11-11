import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CircleArrowLeft as OriginalCircleArrowLeft } from "lucide-react"

/**
 * `CircleArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowLeftIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalCircleArrowLeft} {...props} />,
)

/**
 * `CircleArrowLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleArrowLeftIcon` instead.
 */
export const CircleArrowLeft = CircleArrowLeftIcon
