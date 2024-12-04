import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { IceCreamBowl as OriginalIceCreamBowl } from "lucide-react"

/**
 * `IceCreamBowlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IceCreamBowlIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalIceCreamBowl}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `IceCreamBowl` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `IceCreamBowlIcon` instead.
 */
export const IceCreamBowl = IceCreamBowlIcon
