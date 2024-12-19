import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareChevronDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChevronDownIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareChevronDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
