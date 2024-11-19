import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { HandCoins as OriginalHandCoins } from "lucide-react"

/**
 * `HandCoinsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandCoinsIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalHandCoins}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `HandCoins` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `HandCoinsIcon` instead.
 */
export const HandCoins = HandCoinsIcon
