import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CircleCheckBig as OriginalCircleCheckBig } from "lucide-react"

/**
 * `CircleCheckBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleCheckBigIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalCircleCheckBig} {...props} />
))

/**
 * `CircleCheckBig` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleCheckBigIcon` instead.
 */
export const CircleCheckBig = CircleCheckBigIcon
