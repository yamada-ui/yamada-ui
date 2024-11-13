import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { MapPinCheckInside as OriginalMapPinCheckInside } from "lucide-react"

/**
 * `MapPinCheckInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinCheckInsideIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalMapPinCheckInside}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `MapPinCheckInside` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MapPinCheckInsideIcon` instead.
 */
export const MapPinCheckInside = MapPinCheckInsideIcon
