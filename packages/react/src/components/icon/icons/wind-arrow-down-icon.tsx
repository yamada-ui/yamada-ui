import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WindArrowDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WindArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WindArrowDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={WindArrowDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
