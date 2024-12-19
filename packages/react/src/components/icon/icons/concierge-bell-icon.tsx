import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ConciergeBell } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ConciergeBellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ConciergeBellIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ConciergeBell}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
