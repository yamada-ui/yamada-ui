import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScreenShareOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScreenShareOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScreenShareOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ScreenShareOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
