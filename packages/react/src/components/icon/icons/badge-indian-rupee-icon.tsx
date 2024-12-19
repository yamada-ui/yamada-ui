import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeIndianRupee } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeIndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeIndianRupeeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BadgeIndianRupee}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
