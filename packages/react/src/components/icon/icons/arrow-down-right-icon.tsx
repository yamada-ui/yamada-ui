import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowDownRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
