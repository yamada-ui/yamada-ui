import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleArrowDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
