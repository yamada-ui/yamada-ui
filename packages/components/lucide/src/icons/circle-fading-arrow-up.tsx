import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CircleFadingArrowUp as OriginalCircleFadingArrowUp } from "lucide-react"

/**
 * `CircleFadingArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleFadingArrowUpIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalCircleFadingArrowUp} {...props} />
  ),
)

/**
 * `CircleFadingArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleFadingArrowUpIcon` instead.
 */
export const CircleFadingArrowUp = CircleFadingArrowUpIcon
