import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { UserRoundMinus as OriginalUserRoundMinus } from "lucide-react"

/**
 * `UserRoundMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundMinusIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalUserRoundMinus}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `UserRoundMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `UserRoundMinusIcon` instead.
 */
export const UserRoundMinus = UserRoundMinusIcon
