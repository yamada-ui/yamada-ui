import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { BeanOff as OriginalBeanOff } from "lucide-react"

/**
 * `BeanOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeanOffIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalBeanOff}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `BeanOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BeanOffIcon` instead.
 */
export const BeanOff = BeanOffIcon
