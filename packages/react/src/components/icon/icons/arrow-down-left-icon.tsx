import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowDownLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
