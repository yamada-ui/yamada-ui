import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SquareArrowLeft as OriginalSquareArrowLeft } from "lucide-react"

/**
 * `SquareArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowLeftIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalSquareArrowLeft} {...props} />,
)

/**
 * `SquareArrowLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquareArrowLeftIcon` instead.
 */
export const SquareArrowLeft = SquareArrowLeftIcon
