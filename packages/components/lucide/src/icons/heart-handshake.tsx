import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { HeartHandshake as OriginalHeartHandshake } from "lucide-react"

/**
 * `HeartHandshakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartHandshakeIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalHeartHandshake}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `HeartHandshake` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `HeartHandshakeIcon` instead.
 */
export const HeartHandshake = HeartHandshakeIcon
