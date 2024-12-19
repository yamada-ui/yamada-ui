import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CornerLeftDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CornerLeftDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerLeftDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CornerLeftDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
