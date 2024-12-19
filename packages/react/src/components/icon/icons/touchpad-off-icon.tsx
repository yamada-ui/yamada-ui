import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TouchpadOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TouchpadOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TouchpadOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TouchpadOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
