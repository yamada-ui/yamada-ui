import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowDownUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
