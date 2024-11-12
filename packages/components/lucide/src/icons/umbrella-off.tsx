import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { UmbrellaOff as OriginalUmbrellaOff } from "lucide-react"

/**
 * `UmbrellaOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UmbrellaOffIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalUmbrellaOff} {...props} />
))

/**
 * `UmbrellaOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `UmbrellaOffIcon` instead.
 */
export const UmbrellaOff = UmbrellaOffIcon
