import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChevronDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
