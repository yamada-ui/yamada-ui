import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { MapPinMinusInside as OriginalMapPinMinusInside } from "lucide-react"

/**
 * `MapPinMinusInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinMinusInsideIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalMapPinMinusInside}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `MapPinMinusInside` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MapPinMinusInsideIcon` instead.
 */
export const MapPinMinusInside = MapPinMinusInsideIcon
