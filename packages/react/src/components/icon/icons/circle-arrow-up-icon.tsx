import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleArrowUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
