import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDown10 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDown10Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDown10Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowDown10}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
