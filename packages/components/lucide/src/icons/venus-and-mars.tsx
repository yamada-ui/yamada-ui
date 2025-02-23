import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { VenusAndMars as OriginalVenusAndMars } from "lucide-react"

/**
 * `VenusAndMarsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VenusAndMarsIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalVenusAndMars}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `VenusAndMars` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `VenusAndMarsIcon` instead.
 */
export const VenusAndMars = VenusAndMarsIcon
