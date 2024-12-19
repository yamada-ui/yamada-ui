import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Navigation2Off } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Navigation2OffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Navigation2OffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={Navigation2Off}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
