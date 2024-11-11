import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowLeftRight as OriginalArrowLeftRight } from "lucide-react"

/**
 * `ArrowLeftRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftRightIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalArrowLeftRight} {...props} />
))

/**
 * `ArrowLeftRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowLeftRightIcon` instead.
 */
export const ArrowLeftRight = ArrowLeftRightIcon
