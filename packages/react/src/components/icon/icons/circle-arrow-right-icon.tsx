import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleArrowRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
