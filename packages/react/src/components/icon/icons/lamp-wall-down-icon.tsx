import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LampWallDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LampWallDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampWallDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LampWallDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
