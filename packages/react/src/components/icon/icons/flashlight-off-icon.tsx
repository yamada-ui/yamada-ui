import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FlashlightOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FlashlightOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlashlightOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FlashlightOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
