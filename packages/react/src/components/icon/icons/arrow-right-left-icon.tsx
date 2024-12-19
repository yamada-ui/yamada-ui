import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowRightLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowRightLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowRightLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
