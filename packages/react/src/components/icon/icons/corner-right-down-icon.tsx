import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CornerRightDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CornerRightDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerRightDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CornerRightDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
