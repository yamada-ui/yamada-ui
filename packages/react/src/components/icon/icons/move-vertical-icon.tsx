import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoveVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveVerticalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MoveVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
