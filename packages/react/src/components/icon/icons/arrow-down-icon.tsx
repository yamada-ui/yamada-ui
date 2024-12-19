import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ArrowDown} className={cx("ui-lucide-icon", className)} {...rest} />
)
