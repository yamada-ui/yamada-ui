import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleChevronUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleChevronUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
