import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowLeftRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowLeftRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowLeftRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
