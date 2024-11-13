import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { Cloudy as OriginalCloudy } from "lucide-react"

/**
 * `CloudyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudyIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalCloudy}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `Cloudy` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CloudyIcon` instead.
 */
export const Cloudy = CloudyIcon
