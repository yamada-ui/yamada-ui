import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { WifiHigh as OriginalWifiHigh } from "lucide-react"

/**
 * `WifiHighIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiHighIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalWifiHigh}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `WifiHigh` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `WifiHighIcon` instead.
 */
export const WifiHigh = WifiHighIcon
