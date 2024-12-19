import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AArrowDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AArrowDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AArrowDown} className={cx("ui-lucide-icon", className)} {...rest} />
)
