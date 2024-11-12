import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { HeartHandshake as OriginalHeartHandshake } from "lucide-react"

/**
 * `HeartHandshakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartHandshakeIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalHeartHandshake} {...props} />
))

/**
 * `HeartHandshake` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `HeartHandshakeIcon` instead.
 */
export const HeartHandshake = HeartHandshakeIcon
