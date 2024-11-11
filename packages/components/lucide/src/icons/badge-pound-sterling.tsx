import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BadgePoundSterling as OriginalBadgePoundSterling } from "lucide-react"

/**
 * `BadgePoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgePoundSterlingIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBadgePoundSterling} {...props} />,
)

/**
 * `BadgePoundSterling` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BadgePoundSterlingIcon` instead.
 */
export const BadgePoundSterling = BadgePoundSterlingIcon
