import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowUpLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
