import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareChevronUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChevronUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareChevronUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
