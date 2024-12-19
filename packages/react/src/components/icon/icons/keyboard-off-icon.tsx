import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { KeyboardOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `KeyboardOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KeyboardOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={KeyboardOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
