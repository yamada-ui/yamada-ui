import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TicketsPlane } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TicketsPlaneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketsPlaneIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TicketsPlane}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
