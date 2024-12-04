import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { VolumeX as OriginalVolumeX } from "lucide-react"

/**
 * `VolumeXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolumeXIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalVolumeX}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `VolumeX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `VolumeXIcon` instead.
 */
export const VolumeX = VolumeXIcon
