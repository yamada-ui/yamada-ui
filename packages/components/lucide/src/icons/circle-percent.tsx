import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CirclePercent as OriginalCirclePercent } from "lucide-react"

/**
 * `CirclePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePercentIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalCirclePercent} {...props} />
))

/**
 * `CirclePercent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CirclePercentIcon` instead.
 */
export const CirclePercent = CirclePercentIcon
