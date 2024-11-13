import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { CircleAlert as OriginalCircleAlert } from "lucide-react"

/**
 * `CircleAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleAlertIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalCircleAlert}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `CircleAlert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CircleAlertIcon` instead.
 */
export const CircleAlert = CircleAlertIcon
