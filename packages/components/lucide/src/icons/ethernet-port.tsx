import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { EthernetPort as OriginalEthernetPort } from "lucide-react"

/**
 * `EthernetPortIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EthernetPortIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalEthernetPort}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `EthernetPort` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `EthernetPortIcon` instead.
 */
export const EthernetPort = EthernetPortIcon
