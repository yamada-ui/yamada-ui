import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowUpRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
