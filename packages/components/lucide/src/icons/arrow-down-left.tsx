import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ArrowDownLeft as OriginalArrowDownLeft } from "lucide-react"

/**
 * `ArrowDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownLeftIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalArrowDownLeft} {...props} />
))

/**
 * `ArrowDownLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ArrowDownLeftIcon` instead.
 */
export const ArrowDownLeft = ArrowDownLeftIcon
