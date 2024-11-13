import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { CirclePower as OriginalCirclePower } from "lucide-react"

/**
 * `CirclePowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePowerIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalCirclePower}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `CirclePower` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CirclePowerIcon` instead.
 */
export const CirclePower = CirclePowerIcon
