import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { UserRoundCog as OriginalUserRoundCog } from "lucide-react"

/**
 * `UserRoundCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundCogIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalUserRoundCog}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `UserRoundCog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `UserRoundCogIcon` instead.
 */
export const UserRoundCog = UserRoundCogIcon
