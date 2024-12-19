import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AppWindowMac } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AppWindowMacIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AppWindowMacIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={AppWindowMac}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
